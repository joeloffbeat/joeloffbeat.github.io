import * as THREE from 'three';
import { SPRITE_ROTATION_X } from '../config/constants.js';

const textureLoader = new THREE.TextureLoader();

export class InteractiveEntity {
    constructor(config) {
        this.id = config.id;
        this.spritePath = config.spritePath;
        this.position = new THREE.Vector3(config.x, 0, config.z);
        this.scale = config.scale;
        this.triggerRadius = config.triggerRadius;
        this.collisionBoxSize = config.collisionBox;
        this.overlayId = config.overlayId;
        this.label = config.label;
        this.description = config.description;
        this.icon = config.icon;

        this.mesh = null;
        this.collider = null;
    }

    create() {
        return new Promise((resolve, reject) => {
            textureLoader.load(
                this.spritePath,
                (texture) => {
                    texture.magFilter = THREE.NearestFilter;
                    texture.minFilter = THREE.NearestFilter;

                    // PlaneGeometry with bottom-center anchor (matches old sprite.center=(0.5,0))
                    const geometry = new THREE.PlaneGeometry(this.scale.x, this.scale.y);
                    geometry.translate(0, this.scale.y / 2, 0);

                    const material = new THREE.MeshBasicMaterial({
                        map: texture,
                        transparent: true,
                        alphaTest: 0.5,
                        side: THREE.DoubleSide,
                    });

                    this.mesh = new THREE.Mesh(geometry, material);
                    this.mesh.rotation.x = SPRITE_ROTATION_X;
                    this.mesh.position.copy(this.position);

                    // Collision box centered on entity position
                    const { w, d, h } = this.collisionBoxSize;
                    this.collider = new THREE.Box3(
                        new THREE.Vector3(
                            this.position.x - w / 2,
                            0,
                            this.position.z - this.scale.y / 2 - d / 2
                        ),
                        new THREE.Vector3(
                            this.position.x + w / 2,
                            h,
                            this.position.z - this.scale.y / 2 + d / 2
                        )
                    );

                    resolve(this);
                },
                undefined,
                (err) => {
                    console.error(`Error loading entity sprite ${this.id}:`, err);
                    reject(err);
                }
            );
        });
    }

    getDistanceTo(worldPosition) {
        const dx = worldPosition.x - this.position.x;
        const dz = worldPosition.z - this.position.z;
        return Math.sqrt(dx * dx + dz * dz);
    }

    dispose() {
        if (this.mesh) {
            this.mesh.geometry.dispose();
            this.mesh.material.map?.dispose();
            this.mesh.material.dispose();
        }
    }
}
