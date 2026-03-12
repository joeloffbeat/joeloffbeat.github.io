import * as THREE from 'three';

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

        this.sprite = null;
        this.collider = null;
    }

    create() {
        return new Promise((resolve, reject) => {
            textureLoader.load(
                this.spritePath,
                (texture) => {
                    texture.magFilter = THREE.NearestFilter;
                    texture.minFilter = THREE.NearestFilter;

                    const material = new THREE.SpriteMaterial({
                        map: texture,
                        transparent: true,
                        alphaTest: 0.5,
                    });

                    this.sprite = new THREE.Sprite(material);
                    this.sprite.center.set(0.5, 0);
                    this.sprite.scale.set(this.scale.x, this.scale.y, this.scale.z);
                    this.sprite.position.copy(this.position);

                    // Collision box centered on entity position
                    const { w, d, h } = this.collisionBoxSize;
                    this.collider = new THREE.Box3(
                        new THREE.Vector3(
                            this.position.x - w / 2,
                            0,
                            this.position.z - d / 2
                        ),
                        new THREE.Vector3(
                            this.position.x + w / 2,
                            h,
                            this.position.z + d / 2
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
        if (this.sprite) {
            this.sprite.material.map?.dispose();
            this.sprite.material.dispose();
        }
    }
}
