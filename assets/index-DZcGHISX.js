(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const $l="182",yi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},_i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xp=0,Oh=1,qp=2,p0=3,m0=0,Kr=1,Yp=2,nr=3,Kn=0,en=1,En=2,Jn=0,fs=1,jo=2,kh=3,Bh=4,$p=5,Pi=100,Zp=101,Jp=102,Kp=103,jp=104,Qp=200,em=201,tm=202,nm=203,Qo=204,el=205,im=206,sm=207,rm=208,am=209,om=210,lm=211,cm=212,hm=213,um=214,tl=0,nl=1,il=2,_s=3,sl=4,rl=5,al=6,ol=7,Ta=0,dm=1,fm=2,On=0,vu=1,bu=2,Su=3,Zl=4,Mu=5,wu=6,Eu=7,Gh="attached",pm="detached",Jl=300,jn=301,Fi=302,ca=303,ha=304,Sr=306,bi=1e3,un=1001,ua=1002,et=1003,Tu=1004,g0=1004,ir=1005,_0=1005,vt=1006,jr=1007,x0=1007,$n=1008,y0=1008,cn=1009,Au=1010,Cu=1011,fr=1012,Kl=1013,Tn=1014,Kt=1015,Qn=1016,jl=1017,Ql=1018,pr=1020,Ru=35902,Iu=35899,Pu=1021,Lu=1022,jt=1023,ei=1026,Di=1027,ec=1028,Aa=1029,xs=1030,tc=1031,v0=1032,nc=1033,Qr=33776,ea=33777,ta=33778,na=33779,ll=35840,cl=35841,hl=35842,ul=35843,dl=36196,fl=37492,pl=37496,ml=37488,gl=37489,_l=37490,xl=37491,yl=37808,vl=37809,bl=37810,Sl=37811,Ml=37812,wl=37813,El=37814,Tl=37815,Al=37816,Cl=37817,Rl=37818,Il=37819,Pl=37820,Ll=37821,Dl=36492,Nl=36494,Ul=36495,Fl=36283,Ol=36284,kl=36285,Bl=36286,mm=2200,gm=2201,_m=2202,da=2300,Gl=2301,zo=2302,cs=2400,hs=2401,fa=2402,ic=2500,Du=2501,b0=0,S0=1,M0=2,xm=3200,w0=3201,E0=3202,T0=3203,Bi=0,ym=1,fi="",Ht="srgb",ys="srgb-linear",pa="linear",ot="srgb",A0="",C0="rg",R0="ga",I0=0,ss=7680,P0=7681,L0=7682,D0=7683,N0=34055,U0=34056,F0=5386,O0=512,k0=513,B0=514,G0=515,z0=516,V0=517,H0=518,zh=519,vm=512,bm=513,Sm=514,sc=515,Mm=516,wm=517,rc=518,Em=519,ma=35044,W0=35048,X0=35040,q0=35045,Y0=35049,$0=35041,Z0=35046,J0=35050,K0=35042,j0="100",Vh="300 es",xn=2e3,mr=2001,Q0={COMPUTE:"compute",RENDER:"render"},e_={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},t_={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"};function Tm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}const n_={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function sr(s,e){return new n_[s](e)}function Am(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ga(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Cm(){const s=ga("canvas");return s.style.display="block",s}const Ld={};let Oi=null;function i_(s){Oi=s}function s_(){return Oi}function _a(...s){const e="THREE."+s.shift();Oi?Oi("log",e,...s):console.log(e,...s)}function he(...s){const e="THREE."+s.shift();Oi?Oi("warn",e,...s):console.warn(e,...s)}function Pe(...s){const e="THREE."+s.shift();Oi?Oi("error",e,...s):console.error(e,...s)}function gr(...s){const e=s.join(" ");e in Ld||(Ld[e]=!0,he(...s))}function r_(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}class ti{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Dd=1234567;const ps=Math.PI/180,_r=180/Math.PI;function yn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[s&255]+Gt[s>>8&255]+Gt[s>>16&255]+Gt[s>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function Be(s,e,t){return Math.max(e,Math.min(t,s))}function Nu(s,e){return(s%e+e)%e}function a_(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function o_(s,e,t){return s!==e?(t-s)/(e-s):0}function ia(s,e,t){return(1-t)*s+t*e}function l_(s,e,t,n){return ia(s,e,1-Math.exp(-t*n))}function c_(s,e=1){return e-Math.abs(Nu(s,e*2)-e)}function h_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function u_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function d_(s,e){return s+Math.floor(Math.random()*(e-s+1))}function f_(s,e){return s+Math.random()*(e-s)}function p_(s){return s*(.5-Math.random())}function m_(s){s!==void 0&&(Dd=s);let e=Dd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function g_(s){return s*ps}function __(s){return s*_r}function x_(s){return(s&s-1)===0&&s!==0}function y_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function v_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function b_(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*p,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*p,o*c);break;case"ZYZ":s.set(l*p,l*f,o*h,o*c);break;default:he("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Jt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function $e(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Rm={DEG2RAD:ps,RAD2DEG:_r,generateUUID:yn,clamp:Be,euclideanModulo:Nu,mapLinear:a_,inverseLerp:o_,lerp:ia,damp:l_,pingpong:c_,smoothstep:h_,smootherstep:u_,randInt:d_,randFloat:f_,randFloatSpread:p_,seededRandom:m_,degToRad:g_,radToDeg:__,isPowerOfTwo:x_,ceilPowerOfTwo:y_,floorPowerOfTwo:v_,setQuaternionFromProperEuler:b_,normalize:$e,denormalize:Jt};class Y{constructor(e=0,t=0){Y.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Be(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],p=r[a+2],_=r[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o>=1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==p){let g=l*d+c*f+h*p+u*_;g<0&&(d=-d,f=-f,p=-p,_=-_,g=-g);let m=1-o;if(g<.9995){const x=Math.acos(g),y=Math.sin(x);m=Math.sin(m*x)/y,o=Math.sin(o*x)/y,l=l*m+d*o,c=c*m+f*o,h=h*m+p*o,u=u*m+_*o}else{l=l*m+d*o,c=c*m+f*o,h=h*m+p*o,u=u*m+_*o;const x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-o*f,e[t+2]=c*p+h*f+o*d-l*u,e[t+3]=h*p-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),p=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:he("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Be(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(e=0,t=0,n=0){A.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return kc.copy(this).projectOnVector(e),this.sub(kc)}reflect(e){return this.sub(kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Be(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kc=new A,Nd=new Wt;class Ye{constructor(e,t,n,i,r,a,o,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],_=i[0],g=i[3],m=i[6],x=i[1],y=i[4],b=i[7],w=i[2],T=i[5],R=i[8];return r[0]=a*_+o*x+l*w,r[3]=a*g+o*y+l*T,r[6]=a*m+o*b+l*R,r[1]=c*_+h*x+u*w,r[4]=c*g+h*y+u*T,r[7]=c*m+h*b+u*R,r[2]=d*_+f*x+p*w,r[5]=d*g+f*y+p*T,r[8]=d*m+f*b+p*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,p=t*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Bc.makeScale(e,t)),this}rotate(e){return this.premultiply(Bc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Bc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bc=new Ye,Ud=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fd=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function S_(){const s={enabled:!0,workingColorSpace:ys,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ot&&(i.r=vi(i.r),i.g=vi(i.g),i.b=vi(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(i.r=ur(i.r),i.g=ur(i.g),i.b=ur(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===fi?pa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return gr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return gr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[ys]:{primaries:e,whitePoint:n,transfer:pa,toXYZ:Ud,fromXYZ:Fd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:n,transfer:ot,toXYZ:Ud,fromXYZ:Fd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),s}const je=S_();function vi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ur(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Rs;class Im{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Rs===void 0&&(Rs=ga("canvas")),Rs.width=e.width,Rs.height=e.height;const i=Rs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Rs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ga("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=vi(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vi(t[n]/255)*255):t[n]=vi(t[n]);return{data:t,width:e.width,height:e.height}}else return he("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let M_=0;class Ni{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=yn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Gc(i[a].image)):r.push(Gc(i[a]))}else r=Gc(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Gc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Im.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(he("Texture: Unable to serialize Texture."),{})}let w_=0;const zc=new A;class At extends ti{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=un,i=un,r=vt,a=$n,o=jt,l=cn,c=At.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=yn(),this.name="",this.source=new Ni(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Y(0,0),this.repeat=new Y(1,1),this.center=new Y(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(zc).x}get height(){return this.source.getSize(zc).y}get depth(){return this.source.getSize(zc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){he(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){he(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bi:e.x=e.x-Math.floor(e.x);break;case un:e.x=e.x<0?0:1;break;case ua:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bi:e.y=e.y-Math.floor(e.y);break;case un:e.y=e.y<0?0:1;break;case ua:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=Jl;At.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,n=0,i=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,b=(f+1)/2,w=(m+1)/2,T=(h+d)/4,R=(u+_)/4,P=(p+g)/4;return y>b&&y>w?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=T/n,r=R/n):b>w?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=T/i,r=P/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=R/r,i=P/r),this.set(n,i,r,t),this}let x=Math.sqrt((g-p)*(g-p)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(g-p)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this.w=Be(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this.w=Be(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uu extends ti{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new At(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ni(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vn extends Uu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ac extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=et,this.minFilter=et,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class E_ extends vn{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new ac(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class oc extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=et,this.minFilter=et,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class T_ extends vn{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new oc(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class Bt{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Rn):Rn.fromBufferAttribute(r,a),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wa.copy(n.boundingBox)),Wa.applyMatrix4(e.matrixWorld),this.union(Wa)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cr),Xa.subVectors(this.max,Cr),Is.subVectors(e.a,Cr),Ps.subVectors(e.b,Cr),Ls.subVectors(e.c,Cr),Mi.subVectors(Ps,Is),wi.subVectors(Ls,Ps),Wi.subVectors(Is,Ls);let t=[0,-Mi.z,Mi.y,0,-wi.z,wi.y,0,-Wi.z,Wi.y,Mi.z,0,-Mi.x,wi.z,0,-wi.x,Wi.z,0,-Wi.x,-Mi.y,Mi.x,0,-wi.y,wi.x,0,-Wi.y,Wi.x,0];return!Vc(t,Is,Ps,Ls,Xa)||(t=[1,0,0,0,1,0,0,0,1],!Vc(t,Is,Ps,Ls,Xa))?!1:(qa.crossVectors(Mi,wi),t=[qa.x,qa.y,qa.z],Vc(t,Is,Ps,Ls,Xa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ri=[new A,new A,new A,new A,new A,new A,new A,new A],Rn=new A,Wa=new Bt,Is=new A,Ps=new A,Ls=new A,Mi=new A,wi=new A,Wi=new A,Cr=new A,Xa=new A,qa=new A,Xi=new A;function Vc(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Xi.fromArray(s,r);const o=i.x*Math.abs(Xi.x)+i.y*Math.abs(Xi.y)+i.z*Math.abs(Xi.z),l=e.dot(Xi),c=t.dot(Xi),h=n.dot(Xi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const A_=new Bt,Rr=new A,Hc=new A;class Ot{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):A_.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rr.subVectors(e,this.center);const t=Rr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Rr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rr.copy(e.center).add(Hc)),this.expandByPoint(Rr.copy(e.center).sub(Hc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ai=new A,Wc=new A,Ya=new A,Ei=new A,Xc=new A,$a=new A,qc=new A;class Ms{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Wc.copy(e).add(t).multiplyScalar(.5),Ya.copy(t).sub(e).normalize(),Ei.copy(this.origin).sub(Wc);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ya),o=Ei.dot(this.direction),l=-Ei.dot(Ya),c=Ei.lengthSq(),h=Math.abs(1-a*a);let u,d,f,p;if(h>0)if(u=a*l-o,d=a*o-l,p=r*h,u>=0)if(d>=-p)if(d<=p){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Wc).addScaledVector(Ya,d),f}intersectSphere(e,t){ai.subVectors(e.center,this.origin);const n=ai.dot(this.direction),i=ai.dot(ai)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,i,r){Xc.subVectors(t,e),$a.subVectors(n,e),qc.crossVectors(Xc,$a);let a=this.direction.dot(qc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ei.subVectors(this.origin,e);const l=o*this.direction.dot($a.crossVectors(Ei,$a));if(l<0)return null;const c=o*this.direction.dot(Xc.cross(Ei));if(c<0||l+c>a)return null;const h=-o*Ei.dot(qc);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ze{constructor(e,t,n,i,r,a,o,l,c,h,u,d,f,p,_,g){ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,d,f,p,_,g)}set(e,t,n,i,r,a,o,l,c,h,u,d,f,p,_,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Ds.setFromMatrixColumn(e,0).length(),r=1/Ds.setFromMatrixColumn(e,1).length(),a=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,p=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,p=c*h,_=c*u;t[0]=d+_*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-p,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,p=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,p=o*h,_=o*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,p=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=p*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*l,f=a*c,p=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(C_,e,R_)}lookAt(e,t,n){const i=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Ti.crossVectors(n,mn),Ti.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Ti.crossVectors(n,mn)),Ti.normalize(),Za.crossVectors(mn,Ti),i[0]=Ti.x,i[4]=Za.x,i[8]=mn.x,i[1]=Ti.y,i[5]=Za.y,i[9]=mn.y,i[2]=Ti.z,i[6]=Za.z,i[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],_=n[6],g=n[10],m=n[14],x=n[3],y=n[7],b=n[11],w=n[15],T=i[0],R=i[4],P=i[8],S=i[12],M=i[1],L=i[5],F=i[9],k=i[13],q=i[2],V=i[6],H=i[10],B=i[14],Q=i[3],me=i[7],oe=i[11],ue=i[15];return r[0]=a*T+o*M+l*q+c*Q,r[4]=a*R+o*L+l*V+c*me,r[8]=a*P+o*F+l*H+c*oe,r[12]=a*S+o*k+l*B+c*ue,r[1]=h*T+u*M+d*q+f*Q,r[5]=h*R+u*L+d*V+f*me,r[9]=h*P+u*F+d*H+f*oe,r[13]=h*S+u*k+d*B+f*ue,r[2]=p*T+_*M+g*q+m*Q,r[6]=p*R+_*L+g*V+m*me,r[10]=p*P+_*F+g*H+m*oe,r[14]=p*S+_*k+g*B+m*ue,r[3]=x*T+y*M+b*q+w*Q,r[7]=x*R+y*L+b*V+w*me,r[11]=x*P+y*F+b*H+w*oe,r[15]=x*S+y*k+b*B+w*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],_=e[7],g=e[11],m=e[15],x=l*f-c*d,y=o*f-c*u,b=o*d-l*u,w=a*f-c*h,T=a*d-l*h,R=a*u-o*h;return t*(_*x-g*y+m*b)-n*(p*x-g*w+m*T)+i*(p*y-_*w+m*R)-r*(p*b-_*T+g*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],_=e[13],g=e[14],m=e[15],x=u*g*c-_*d*c+_*l*f-o*g*f-u*l*m+o*d*m,y=p*d*c-h*g*c-p*l*f+a*g*f+h*l*m-a*d*m,b=h*_*c-p*u*c+p*o*f-a*_*f-h*o*m+a*u*m,w=p*u*l-h*_*l-p*o*d+a*_*d+h*o*g-a*u*g,T=t*x+n*y+i*b+r*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=x*R,e[1]=(_*d*r-u*g*r-_*i*f+n*g*f+u*i*m-n*d*m)*R,e[2]=(o*g*r-_*l*r+_*i*c-n*g*c-o*i*m+n*l*m)*R,e[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*f-n*l*f)*R,e[4]=y*R,e[5]=(h*g*r-p*d*r+p*i*f-t*g*f-h*i*m+t*d*m)*R,e[6]=(p*l*r-a*g*r-p*i*c+t*g*c+a*i*m-t*l*m)*R,e[7]=(a*d*r-h*l*r+h*i*c-t*d*c-a*i*f+t*l*f)*R,e[8]=b*R,e[9]=(p*u*r-h*_*r-p*n*f+t*_*f+h*n*m-t*u*m)*R,e[10]=(a*_*r-p*o*r+p*n*c-t*_*c-a*n*m+t*o*m)*R,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*f-t*o*f)*R,e[12]=w*R,e[13]=(h*_*i-p*u*i+p*n*d-t*_*d-h*n*g+t*u*g)*R,e[14]=(p*o*i-a*_*i-p*n*l+t*_*l+a*n*g-t*o*g)*R,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,p=r*u,_=a*h,g=a*u,m=o*u,x=l*c,y=l*h,b=l*u,w=n.x,T=n.y,R=n.z;return i[0]=(1-(_+m))*w,i[1]=(f+b)*w,i[2]=(p-y)*w,i[3]=0,i[4]=(f-b)*T,i[5]=(1-(d+m))*T,i[6]=(g+x)*T,i[7]=0,i[8]=(p+y)*R,i[9]=(g-x)*R,i[10]=(1-(d+_))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;if(e.x=i[12],e.y=i[13],e.z=i[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let r=Ds.set(i[0],i[1],i[2]).length();const a=Ds.set(i[4],i[5],i[6]).length(),o=Ds.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),In.copy(this);const c=1/r,h=1/a,u=1/o;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=h,In.elements[5]*=h,In.elements[6]*=h,In.elements[8]*=u,In.elements[9]*=u,In.elements[10]*=u,t.setFromRotationMatrix(In),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=xn,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let p,_;if(l)p=r/(a-r),_=a*r/(a-r);else if(o===xn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===mr)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=xn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let p,_;if(l)p=1/(a-r),_=a/(a-r);else if(o===xn)p=-2/(a-r),_=-(a+r)/(a-r);else if(o===mr)p=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ds=new A,In=new ze,C_=new A(0,0,0),R_=new A(1,1,1),Ti=new A,Za=new A,mn=new A,Od=new ze,kd=new Wt;class bn{constructor(e=0,t=0,n=0,i=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:he("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Od.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Od,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kd.setFromEuler(this),this.setFromQuaternion(kd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class lc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let I_=0;const Bd=new A,Ns=new Wt,oi=new ze,Ja=new A,Ir=new A,P_=new A,L_=new Wt,Gd=new A(1,0,0),zd=new A(0,1,0),Vd=new A(0,0,1),Hd={type:"added"},D_={type:"removed"},Us={type:"childadded",child:null},Yc={type:"childremoved",child:null};class st extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:I_++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=st.DEFAULT_UP.clone();const e=new A,t=new bn,n=new Wt,i=new A(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ze},normalMatrix:{value:new Ye}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=st.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(Gd,e)}rotateY(e){return this.rotateOnAxis(zd,e)}rotateZ(e){return this.rotateOnAxis(Vd,e)}translateOnAxis(e,t){return Bd.copy(e).applyQuaternion(this.quaternion),this.position.add(Bd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gd,e)}translateY(e){return this.translateOnAxis(zd,e)}translateZ(e){return this.translateOnAxis(Vd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ja.copy(e):Ja.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(Ir,Ja,this.up):oi.lookAt(Ja,Ir,this.up),this.quaternion.setFromRotationMatrix(oi),i&&(oi.extractRotation(i.matrixWorld),Ns.setFromRotationMatrix(oi),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Pe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hd),Us.child=e,this.dispatchEvent(Us),Us.child=null):Pe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(D_),Yc.child=e,this.dispatchEvent(Yc),Yc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hd),Us.child=e,this.dispatchEvent(Us),Us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,e,P_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,L_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}st.DEFAULT_UP=new A(0,1,0);st.DEFAULT_MATRIX_AUTO_UPDATE=!0;st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new A,li=new A,$c=new A,ci=new A,Fs=new A,Os=new A,Wd=new A,Zc=new A,Jc=new A,Kc=new A,jc=new _t,Qc=new _t,eh=new _t;class hn{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Pn.subVectors(e,t),i.cross(Pn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Pn.subVectors(i,t),li.subVectors(n,t),$c.subVectors(e,t);const a=Pn.dot(Pn),o=Pn.dot(li),l=Pn.dot($c),c=li.dot(li),h=li.dot($c),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,p=(a*h-o*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ci.x),l.addScaledVector(a,ci.y),l.addScaledVector(o,ci.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return jc.setScalar(0),Qc.setScalar(0),eh.setScalar(0),jc.fromBufferAttribute(e,t),Qc.fromBufferAttribute(e,n),eh.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(jc,r.x),a.addScaledVector(Qc,r.y),a.addScaledVector(eh,r.z),a}static isFrontFacing(e,t,n,i){return Pn.subVectors(n,t),li.subVectors(e,t),Pn.cross(li).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Pn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return hn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Fs.subVectors(i,n),Os.subVectors(r,n),Zc.subVectors(e,n);const l=Fs.dot(Zc),c=Os.dot(Zc);if(l<=0&&c<=0)return t.copy(n);Jc.subVectors(e,i);const h=Fs.dot(Jc),u=Os.dot(Jc);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Fs,a);Kc.subVectors(e,r);const f=Fs.dot(Kc),p=Os.dot(Kc);if(p>=0&&f<=p)return t.copy(r);const _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Os,o);const g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return Wd.subVectors(r,i),o=(u-h)/(u-h+(f-p)),t.copy(i).addScaledVector(Wd,o);const m=1/(g+_+d);return a=_*m,o=d*m,t.copy(n).addScaledVector(Fs,a).addScaledVector(Os,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},Ka={h:0,s:0,l:0};function th(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=je.workingColorSpace){if(e=Nu(e,1),t=Be(t,0,1),n=Be(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=th(a,r,e+1/3),this.g=th(a,r,e),this.b=th(a,r,e-1/3)}return je.colorSpaceToWorking(this,i),this}setStyle(e,t=Ht){function n(r){r!==void 0&&parseFloat(r)<1&&he("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:he("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);he("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){const n=Pm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):he("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}copyLinearToSRGB(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return je.workingToColorSpace(zt.copy(this),e),Math.round(Be(zt.r*255,0,255))*65536+Math.round(Be(zt.g*255,0,255))*256+Math.round(Be(zt.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(zt.copy(this),t);const n=zt.r,i=zt.g,r=zt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Ht){je.workingToColorSpace(zt.copy(this),e);const t=zt.r,n=zt.g,i=zt.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+t,Ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ai),e.getHSL(Ka);const n=ia(Ai.h,Ka.h,t),i=ia(Ai.s,Ka.s,t),r=ia(Ai.l,Ka.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new ve;ve.NAMES=Pm;let N_=0;class Xt extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=yn(),this.name="",this.type="Material",this.blending=fs,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qo,this.blendDst=el,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){he(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){he(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qo&&(n.blendSrc=this.blendSrc),this.blendDst!==el&&(n.blendDst=this.blendDst),this.blendEquation!==Pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Bn extends Xt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pi=U_();function U_(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function on(s){Math.abs(s)>65504&&he("DataUtils.toHalfFloat(): Value out of range."),s=Be(s,-65504,65504),pi.floatView[0]=s;const e=pi.uint32View[0],t=e>>23&511;return pi.baseTable[t]+((e&8388607)>>pi.shiftTable[t])}function Xr(s){const e=s>>10;return pi.uint32View[0]=pi.mantissaTable[pi.offsetTable[e]+(s&1023)]+pi.exponentTable[e],pi.floatView[0]}class F_{static toHalfFloat(e){return on(e)}static fromHalfFloat(e){return Xr(e)}}const Rt=new A,ja=new Y;let O_=0;class tt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:O_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ma,this.updateRanges=[],this.gpuType=Kt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ja.fromBufferAttribute(this,t),ja.applyMatrix3(e),this.setXY(t,ja.x,ja.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Jt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$e(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jt(t,this.array)),t}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jt(t,this.array)),t}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jt(t,this.array)),t}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array),r=$e(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ma&&(e.usage=this.usage),e}}class k_ extends tt{constructor(e,t,n){super(new Int8Array(e),t,n)}}class B_ extends tt{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class G_ extends tt{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class z_ extends tt{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Fu extends tt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class V_ extends tt{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Ou extends tt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class H_ extends tt{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=Xr(this.array[e*this.itemSize]);return this.normalized&&(t=Jt(t,this.array)),t}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize]=on(t),this}getY(e){let t=Xr(this.array[e*this.itemSize+1]);return this.normalized&&(t=Jt(t,this.array)),t}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+1]=on(t),this}getZ(e){let t=Xr(this.array[e*this.itemSize+2]);return this.normalized&&(t=Jt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+2]=on(t),this}getW(e){let t=Xr(this.array[e*this.itemSize+3]);return this.normalized&&(t=Jt(t,this.array)),t}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+3]=on(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array)),this.array[e+0]=on(t),this.array[e+1]=on(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array)),this.array[e+0]=on(t),this.array[e+1]=on(n),this.array[e+2]=on(i),this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array),r=$e(r,this.array)),this.array[e+0]=on(t),this.array[e+1]=on(n),this.array[e+2]=on(i),this.array[e+3]=on(r),this}}class we extends tt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let W_=0;const Mn=new ze,nh=new st,ks=new A,gn=new Bt,Pr=new Bt,Nt=new A;class He extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tm(e)?Ou:Fu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,n){return Mn.makeTranslation(e,t,n),this.applyMatrix4(Mn),this}scale(e,t,n){return Mn.makeScale(e,t,n),this.applyMatrix4(Mn),this}lookAt(e){return nh.lookAt(e),nh.updateMatrix(),this.applyMatrix4(nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new we(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&he("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ot);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){const n=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Pr.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(gn.min,Pr.min),gn.expandByPoint(Nt),Nt.addVectors(gn.max,Pr.max),gn.expandByPoint(Nt)):(gn.expandByPoint(Pr.min),gn.expandByPoint(Pr.max))}gn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Nt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Nt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Nt.fromBufferAttribute(o,c),l&&(ks.fromBufferAttribute(e,c),Nt.add(ks)),i=Math.max(i,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new A,l[P]=new A;const c=new A,h=new A,u=new A,d=new Y,f=new Y,p=new Y,_=new A,g=new A;function m(P,S,M){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,S),p.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),p.sub(d);const L=1/(f.x*p.y-p.x*f.y);isFinite(L)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(L),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(L),o[P].add(_),o[S].add(_),o[M].add(_),l[P].add(g),l[S].add(g),l[M].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let P=0,S=x.length;P<S;++P){const M=x[P],L=M.start,F=M.count;for(let k=L,q=L+F;k<q;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const y=new A,b=new A,w=new A,T=new A;function R(P){w.fromBufferAttribute(i,P),T.copy(w);const S=o[P];y.copy(S),y.sub(w.multiplyScalar(w.dot(S))).normalize(),b.crossVectors(T,S);const L=b.dot(l[P])<0?-1:1;a.setXYZW(P,y.x,y.y,y.z,L)}for(let P=0,S=x.length;P<S;++P){const M=x[P],L=M.start,F=M.count;for(let k=L,q=L+F;k<q;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new A,r=new A,a=new A,o=new A,l=new A,c=new A,h=new A,u=new A;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,p=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new tt(d,h,u)}if(this.index===null)return he("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new He,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xd=new ze,qi=new Ms,Qa=new Ot,qd=new A,eo=new A,to=new A,no=new A,ih=new A,io=new A,Yd=new A,so=new A;class bt extends st{constructor(e=new He,t=new Bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){io.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(ih.fromBufferAttribute(u,e),a?io.addScaledVector(ih,h):io.addScaledVector(ih.sub(t),h))}t.add(io)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qa.copy(n.boundingSphere),Qa.applyMatrix4(r),qi.copy(e.ray).recast(e.near),!(Qa.containsPoint(qi.origin)===!1&&(qi.intersectSphere(Qa,qd)===null||qi.origin.distanceToSquared(qd)>(e.far-e.near)**2))&&(Xd.copy(r).invert(),qi.copy(e.ray).applyMatrix4(Xd),!(n.boundingBox!==null&&qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=a[g.materialIndex],x=Math.max(g.start,f.start),y=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let b=x,w=y;b<w;b+=3){const T=o.getX(b),R=o.getX(b+1),P=o.getX(b+2);i=ro(this,m,e,n,c,h,u,T,R,P),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const x=o.getX(g),y=o.getX(g+1),b=o.getX(g+2);i=ro(this,a,e,n,c,h,u,x,y,b),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=a[g.materialIndex],x=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let b=x,w=y;b<w;b+=3){const T=b,R=b+1,P=b+2;i=ro(this,m,e,n,c,h,u,T,R,P),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const x=g,y=g+1,b=g+2;i=ro(this,a,e,n,c,h,u,x,y,b),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function X_(s,e,t,n,i,r,a,o){let l;if(e.side===en?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Kn,o),l===null)return null;so.copy(o),so.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(so);return c<t.near||c>t.far?null:{distance:c,point:so.clone(),object:s}}function ro(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,eo),s.getVertexPosition(l,to),s.getVertexPosition(c,no);const h=X_(s,e,t,n,eo,to,no,Yd);if(h){const u=new A;hn.getBarycoord(Yd,eo,to,no,u),i&&(h.uv=hn.getInterpolatedAttribute(i,o,l,c,u,new Y)),r&&(h.uv1=hn.getInterpolatedAttribute(r,o,l,c,u,new Y)),a&&(h.normal=hn.getInterpolatedAttribute(a,o,l,c,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new A,materialIndex:0};hn.getNormal(eo,to,no,d.normal),h.face=d,h.barycoord=u}return h}class ws extends He{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(u,2));function p(_,g,m,x,y,b,w,T,R,P,S){const M=b/R,L=w/P,F=b/2,k=w/2,q=T/2,V=R+1,H=P+1;let B=0,Q=0;const me=new A;for(let oe=0;oe<H;oe++){const ue=oe*L-k;for(let Xe=0;Xe<V;Xe++){const Ve=Xe*M-F;me[_]=Ve*x,me[g]=ue*y,me[m]=q,c.push(me.x,me.y,me.z),me[_]=0,me[g]=0,me[m]=T>0?1:-1,h.push(me.x,me.y,me.z),u.push(Xe/R),u.push(1-oe/P),B+=1}}for(let oe=0;oe<P;oe++)for(let ue=0;ue<R;ue++){const Xe=d+ue+V*oe,Ve=d+ue+V*(oe+1),ut=d+(ue+1)+V*(oe+1),dt=d+(ue+1)+V*oe;l.push(Xe,Ve,dt),l.push(Ve,ut,dt),Q+=6}o.addGroup(f,Q,S),f+=Q,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(he("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function $t(s){const e={};for(let t=0;t<s.length;t++){const n=xr(s[t]);for(const i in n)e[i]=n[i]}return e}function q_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Lm(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const Dm={clone:xr,merge:$t};var Y_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends Xt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Y_,this.fragmentShader=$_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xr(e.uniforms),this.uniformsGroups=q_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class cc extends st{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ci=new A,$d=new Y,Zd=new Y;class kt extends cc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_r*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _r*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z)}getViewSize(e,t){return this.getViewBounds(e,$d,Zd),t.subVectors(Zd,$d)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ps*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Bs=-90,Gs=1;class Nm extends st{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new kt(Bs,Gs,e,t);i.layers=this.layers,this.add(i);const r=new kt(Bs,Gs,e,t);r.layers=this.layers,this.add(r);const a=new kt(Bs,Gs,e,t);a.layers=this.layers,this.add(a);const o=new kt(Bs,Gs,e,t);o.layers=this.layers,this.add(o);const l=new kt(Bs,Gs,e,t);l.layers=this.layers,this.add(l);const c=new kt(Bs,Gs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===xn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Ca extends At{constructor(e=[],t=jn,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ku extends vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ca(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ws(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:xr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:Jn});r.uniforms.tEquirect.value=t;const a=new bt(i,r),o=t.minFilter;return t.minFilter===$n&&(t.minFilter=vt),new Nm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}class rr extends st{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Z_={type:"move"};class Vo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Z_)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new rr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class hc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ve(e),this.density=t}clone(){return new hc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class uc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ve(e),this.near=t,this.far=n}clone(){return new uc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Bu extends st{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class dc{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ma,this.updateRanges=[],this.version=0,this.uuid=yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Yt=new A;class vs{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Jt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$e(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Jt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Jt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Jt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Jt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array),r=$e(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){_a("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new tt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new vs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){_a("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Mr extends Xt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let zs;const Lr=new A,Vs=new A,Hs=new A,Ws=new Y,Dr=new Y,Um=new ze,ao=new A,Nr=new A,oo=new A,Jd=new Y,sh=new Y,Kd=new Y;class Ra extends st{constructor(e=new Mr){if(super(),this.isSprite=!0,this.type="Sprite",zs===void 0){zs=new He;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new dc(t,5);zs.setIndex([0,1,2,0,2,3]),zs.setAttribute("position",new vs(n,3,0,!1)),zs.setAttribute("uv",new vs(n,2,3,!1))}this.geometry=zs,this.material=e,this.center=new Y(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Pe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vs.setFromMatrixScale(this.matrixWorld),Um.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Hs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vs.multiplyScalar(-Hs.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;lo(ao.set(-.5,-.5,0),Hs,a,Vs,i,r),lo(Nr.set(.5,-.5,0),Hs,a,Vs,i,r),lo(oo.set(.5,.5,0),Hs,a,Vs,i,r),Jd.set(0,0),sh.set(1,0),Kd.set(1,1);let o=e.ray.intersectTriangle(ao,Nr,oo,!1,Lr);if(o===null&&(lo(Nr.set(-.5,.5,0),Hs,a,Vs,i,r),sh.set(0,1),o=e.ray.intersectTriangle(ao,oo,Nr,!1,Lr),o===null))return;const l=e.ray.origin.distanceTo(Lr);l<e.near||l>e.far||t.push({distance:l,point:Lr.clone(),uv:hn.getInterpolation(Lr,ao,Nr,oo,Jd,sh,Kd,new Y),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function lo(s,e,t,n,i,r){Ws.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Dr.x=r*Ws.x-i*Ws.y,Dr.y=i*Ws.x+r*Ws.y):Dr.copy(Ws),s.copy(e),s.x+=Dr.x,s.y+=Dr.y,s.applyMatrix4(Um)}const co=new A,jd=new A;class Fm extends st{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let r;for(r=0;r<i.length&&!(t<i[r].distance);r++);return i.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){co.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(co);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){co.setFromMatrixPosition(e.matrixWorld),jd.setFromMatrixPosition(this.matrixWorld);const n=co.distanceTo(jd)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),n>=a)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const Qd=new A,ef=new _t,tf=new _t,J_=new A,nf=new ze,ho=new A,rh=new Ot,sf=new ze,ah=new Ms;class Om extends bt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Gh,this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Bt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ho),this.boundingBox.expandByPoint(ho)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ot),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ho),this.boundingSphere.expandByPoint(ho)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rh.copy(this.boundingSphere),rh.applyMatrix4(i),e.ray.intersectsSphere(rh)!==!1&&(sf.copy(i).invert(),ah.copy(e.ray).applyMatrix4(sf),!(this.boundingBox!==null&&ah.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ah)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new _t,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Gh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===pm?this.bindMatrixInverse.copy(this.bindMatrix).invert():he("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;ef.fromBufferAttribute(i.attributes.skinIndex,e),tf.fromBufferAttribute(i.attributes.skinWeight,e),Qd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=tf.getComponent(r);if(a!==0){const o=ef.getComponent(r);nf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(J_.copy(Qd).applyMatrix4(nf),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Gu extends st{constructor(){super(),this.isBone=!0,this.type="Bone"}}class kn extends At{constructor(e=null,t=1,n=1,i,r,a,o,l,c=et,h=et,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rf=new ze,K_=new ze;class fc{constructor(e=[],t=[]){this.uuid=yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){he("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:K_;rf.multiplyMatrices(o,t[r]),rf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new fc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new kn(t,e,e,jt,Kt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(he("Skeleton: No bone found with UUID:",r),a=new Gu),this.bones.push(a),this.boneInverses.push(new ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class yr extends tt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Xs=new ze,af=new ze,uo=[],of=new Bt,j_=new ze,Ur=new bt,Fr=new Ot;class km extends bt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new yr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,j_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Bt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xs),of.copy(e.boundingBox).applyMatrix4(Xs),this.boundingBox.union(of)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ot),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xs),Fr.copy(e.boundingSphere).applyMatrix4(Xs),this.boundingSphere.union(Fr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ur.geometry=this.geometry,Ur.material=this.material,Ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fr.copy(this.boundingSphere),Fr.applyMatrix4(n),e.ray.intersectsSphere(Fr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Xs),af.multiplyMatrices(n,Xs),Ur.matrixWorld=af,Ur.raycast(e,uo);for(let a=0,o=uo.length;a<o;a++){const l=uo[a];l.instanceId=r,l.object=this,t.push(l)}uo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new yr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new kn(new Float32Array(i*this.count),i,this.count,ec,Kt));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const oh=new A,Q_=new A,ex=new Ye;class ui{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=oh.subVectors(n,t).cross(Q_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(oh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ex.getNormalMatrix(e),i=this.coplanarPoint(oh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yi=new Ot,tx=new Y(.5,.5),fo=new A;class wr{constructor(e=new ui,t=new ui,n=new ui,i=new ui,r=new ui,a=new ui){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xn,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],_=r[9],g=r[10],m=r[11],x=r[12],y=r[13],b=r[14],w=r[15];if(i[0].setComponents(c-a,f-h,m-p,w-x).normalize(),i[1].setComponents(c+a,f+h,m+p,w+x).normalize(),i[2].setComponents(c+o,f+u,m+_,w+y).normalize(),i[3].setComponents(c-o,f-u,m-_,w-y).normalize(),n)i[4].setComponents(l,d,g,b).normalize(),i[5].setComponents(c-l,f-d,m-g,w-b).normalize();else if(i[4].setComponents(c-l,f-d,m-g,w-b).normalize(),t===xn)i[5].setComponents(c+l,f+d,m+g,w+b).normalize();else if(t===mr)i[5].setComponents(l,d,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(e){Yi.center.set(0,0,0);const t=tx.distanceTo(e.center);return Yi.radius=.7071067811865476+t,Yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(fo.x=i.normal.x>0?e.max.x:e.min.x,fo.y=i.normal.y>0?e.max.y:e.min.y,fo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(fo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Vn=new ze,Hn=new wr;class pc{constructor(){this.coordinateSystem=xn}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Vn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Hn.setFromProjectionMatrix(Vn,i.coordinateSystem,i.reversedDepth),Hn.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Vn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Hn.setFromProjectionMatrix(Vn,i.coordinateSystem,i.reversedDepth),Hn.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Vn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Hn.setFromProjectionMatrix(Vn,i.coordinateSystem,i.reversedDepth),Hn.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Vn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Hn.setFromProjectionMatrix(Vn,i.coordinateSystem,i.reversedDepth),Hn.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Vn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Hn.setFromProjectionMatrix(Vn,i.coordinateSystem,i.reversedDepth),Hn.containsPoint(e))return!0}return!1}clone(){return new pc}}function lh(s,e){return s-e}function nx(s,e){return s.z-e.z}function ix(s,e){return e.z-s.z}class sx{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){const r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const o=r[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}}const rn=new ze,rx=new ve(1,1,1),lf=new wr,ax=new pc,po=new Bt,$i=new Ot,Or=new A,cf=new A,ox=new A,ch=new sx,Vt=new bt,mo=[];function lx(s,e,t=0){const n=e.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==e.array.constructor){const i=s.count;for(let r=0;r<i;r++)for(let a=0;a<n;a++)e.setComponent(r+t,a,s.getComponent(r,a))}else e.array.set(s.array,t*n);e.needsUpdate=!0}function Zi(s,e){if(s.constructor!==e.constructor){const t=Math.min(s.length,e.length);for(let n=0;n<t;n++)e[n]=s[n]}else{const t=Math.min(s.length,e.length);e.set(new s.constructor(s.buffer,0,t))}}class Bm extends bt{constructor(e,t,n=t*2,i){super(new He,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new kn(t,e,e,jt,Kt);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new kn(t,e,e,Aa,Tn);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new kn(t,e,e,jt,Kt);n.colorSpace=je.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in e.attributes){const a=e.getAttribute(r),{array:o,itemSize:l,normalized:c}=a,h=new o.constructor(n*l),u=new tt(h,l,c);t.setAttribute(r,u)}if(e.getIndex()!==null){const r=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new tt(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),r=t.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bt);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,rn),this.getBoundingBoxAt(r,po).applyMatrix4(rn),e.union(po)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ot);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,rn),this.getBoundingSphereAt(r,$i).applyMatrix4(rn),e.union($i)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(lh),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;rn.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;const a=this._colorsTexture;return a&&(rx.toArray(a.image.data,i*4),a.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const a=e.getIndex();if(a!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?a.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(lh),l=this._availableGeometryIds.shift(),r[l]=i):(l=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(l,e),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),a=t.getIndex(),o=this._geometryInfo[e];if(i&&a.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(const h in n.attributes){const u=t.getAttribute(h),d=n.getAttribute(h);lx(u,d,l);const f=u.itemSize;for(let p=u.count,_=c;p<_;p++){const g=l+p;for(let m=0;m<f;m++)d.setComponent(g,m,0)}d.needsUpdate=!0,d.addUpdateRange(l*f,c*f)}if(i){const h=o.indexStart,u=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let d=0;d<a.count;d++)r.setX(h+d,l+a.getX(d));for(let d=a.count,f=u;d<f;d++)r.setX(h+d,l);r.needsUpdate=!0,r.addUpdateRange(h,o.reservedIndexCount)}return o.start=i?o.indexStart:o.vertexStart,o.count=i?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].active&&n[i].geometryIndex===e&&this.deleteInstance(i);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const n=this._geometryInfo,i=n.map((a,o)=>o).sort((a,o)=>n[a].vertexStart-n[o].vertexStart),r=this.geometry;for(let a=0,o=n.length;a<o;a++){const l=i[a],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==t){const{indexStart:h,vertexStart:u,reservedIndexCount:d}=c,f=r.index,p=f.array,_=e-u;for(let g=h;g<h+d;g++)p[g]=p[g]+_;f.array.copyWithin(t,h,h+d),f.addUpdateRange(t,d),f.needsUpdate=!0,c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){const{vertexStart:h,reservedVertexCount:u}=c,d=r.attributes;for(const f in d){const p=d[f],{array:_,itemSize:g}=p;_.copyWithin(e*g,h*g,(h+u)*g),p.addUpdateRange(e*g,u*g),p.needsUpdate=!0}c.vertexStart=e}e+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart,this._nextIndexStart=r.index?c.indexStart+c.reservedIndexCount:0,this._nextVertexStart=c.vertexStart+c.reservedVertexCount}}return this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingBox===null){const r=new Bt,a=n.index,o=n.attributes.position;for(let l=i.start,c=i.start+i.count;l<c;l++){let h=l;a&&(h=a.getX(h)),r.expandByPoint(Or.fromBufferAttribute(o,h))}i.boundingBox=r}return t.copy(i.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingSphere===null){const r=new Ot;this.getBoundingBoxAt(e,po),po.getCenter(r.center);const a=n.index,o=n.attributes.position;let l=0;for(let c=i.start,h=i.start+i.count;c<h;c++){let u=c;a&&(u=a.getX(u)),Or.fromBufferAttribute(o,u),l=Math.max(l,r.center.distanceToSquared(Or))}r.radius=Math.sqrt(l),i.boundingSphere=r}return t.copy(i.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const n=this._matricesTexture,i=this._matricesTexture.image.data;return t.toArray(i,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(lh);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const i=new Int32Array(e),r=new Int32Array(e);Zi(this._multiDrawCounts,i),Zi(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r,this._maxInstanceCount=e;const a=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;a.dispose(),this._initIndirectTexture(),Zi(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),Zi(o.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),Zi(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...n.map(o=>o.vertexStart+o.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new He,this._initializeGeometry(r));const a=this.geometry;r.index&&Zi(r.index.array,a.index.array);for(const o in r.attributes)Zi(r.attributes[o].array,a.attributes[o].array)}raycast(e,t){const n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,a=this.geometry;Vt.material=this.material,Vt.geometry.index=a.index,Vt.geometry.attributes=a.attributes,Vt.geometry.boundingBox===null&&(Vt.geometry.boundingBox=new Bt),Vt.geometry.boundingSphere===null&&(Vt.geometry.boundingSphere=new Ot);for(let o=0,l=n.length;o<l;o++){if(!n[o].visible||!n[o].active)continue;const c=n[o].geometryIndex,h=i[c];Vt.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,Vt.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,Vt.geometry.boundingBox),this.getBoundingSphereAt(c,Vt.geometry.boundingSphere),Vt.raycast(e,mo);for(let u=0,d=mo.length;u<d;u++){const f=mo[u];f.object=this,f.batchId=o,t.push(f)}mo.length=0}Vt.material=null,Vt.geometry.index=null,Vt.geometry.attributes={},Vt.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=i.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,l=this._instanceInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,u=this._geometryInfo,d=this.perObjectFrustumCulled,f=this._indirectTexture,p=f.image.data,_=n.isArrayCamera?ax:lf;d&&!n.isArrayCamera&&(rn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),lf.setFromProjectionMatrix(rn,n.coordinateSystem,n.reversedDepth));let g=0;if(this.sortObjects){rn.copy(this.matrixWorld).invert(),Or.setFromMatrixPosition(n.matrixWorld).applyMatrix4(rn),cf.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(rn);for(let y=0,b=l.length;y<b;y++)if(l[y].visible&&l[y].active){const w=l[y].geometryIndex;this.getMatrixAt(y,rn),this.getBoundingSphereAt(w,$i).applyMatrix4(rn);let T=!1;if(d&&(T=!_.intersectsSphere($i,n)),!T){const R=u[w],P=ox.subVectors($i.center,Or).dot(cf);ch.push(R.start,R.count,P,y)}}const m=ch.list,x=this.customSort;x===null?m.sort(r.transparent?ix:nx):x.call(this,m,n);for(let y=0,b=m.length;y<b;y++){const w=m[y];c[g]=w.start*o,h[g]=w.count,p[g]=w.index,g++}ch.reset()}else for(let m=0,x=l.length;m<x;m++)if(l[m].visible&&l[m].active){const y=l[m].geometryIndex;let b=!1;if(d&&(this.getMatrixAt(m,rn),this.getBoundingSphereAt(y,$i).applyMatrix4(rn),b=!_.intersectsSphere($i,n)),!b){const w=u[y];c[g]=w.start*o,h[g]=w.count,p[g]=m,g++}}f.needsUpdate=!0,this._multiDrawCount=g,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,r,a){this.onBeforeRender(e,null,i,r,a)}}class tn extends Xt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zl=new A,Vl=new A,hf=new ze,kr=new Ms,go=new Ot,hh=new A,uf=new A;class ki extends st{constructor(e=new He,t=new tn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)zl.fromBufferAttribute(t,i-1),Vl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=zl.distanceTo(Vl);e.setAttribute("lineDistance",new we(n,1))}else he("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(i),go.radius+=r,e.ray.intersectsSphere(go)===!1)return;hf.copy(i).invert(),kr.copy(e.ray).applyMatrix4(hf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=f,g=p-1;_<g;_+=c){const m=h.getX(_),x=h.getX(_+1),y=_o(this,e,kr,l,m,x,_);y&&t.push(y)}if(this.isLineLoop){const _=h.getX(p-1),g=h.getX(f),m=_o(this,e,kr,l,_,g,p-1);m&&t.push(m)}}else{const f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let _=f,g=p-1;_<g;_+=c){const m=_o(this,e,kr,l,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){const _=_o(this,e,kr,l,p-1,f,p-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function _o(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(zl.fromBufferAttribute(o,i),Vl.fromBufferAttribute(o,r),t.distanceSqToSegment(zl,Vl,hh,uf)>n)return;hh.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(hh);if(!(c<e.near||c>e.far))return{distance:c,point:uf.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const df=new A,ff=new A;class ni extends ki{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)df.fromBufferAttribute(t,i),ff.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+df.distanceTo(ff);e.setAttribute("lineDistance",new we(n,1))}else he("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Gm extends ki{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ia extends Xt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const pf=new ze,Hh=new Ms,xo=new Ot,yo=new A;class mc extends st{constructor(e=new He,t=new Ia){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(i),xo.radius+=r,e.ray.intersectsSphere(xo)===!1)return;pf.copy(i).invert(),Hh.copy(e.ray).applyMatrix4(pf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,_=f;p<_;p++){const g=c.getX(p);yo.fromBufferAttribute(u,g),mf(yo,g,l,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,_=f;p<_;p++)yo.fromBufferAttribute(u,p),mf(yo,p,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function mf(s,e,t,n,i,r,a){const o=Hh.distanceSqToPoint(s);if(o<t){const l=new A;Hh.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class zm extends At{constructor(e,t,n,i,r=vt,a=vt,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const h=this;function u(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class cx extends zm{constructor(e,t,n,i,r,a,o,l){super({},e,t,n,i,r,a,o,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}}class hx extends At{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=et,this.minFilter=et,this.generateMipmaps=!1,this.needsUpdate=!0}}class gc extends At{constructor(e,t,n,i,r,a,o,l,c,h,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class ux extends gc{constructor(e,t,n,i,r,a){super(e,t,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=un,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class dx extends gc{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,jn),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class Pa extends At{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vr extends At{constructor(e,t,n=Tn,i,r,a,o=et,l=et,c,h=ei,u=1){if(h!==ei&&h!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ni(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Vm extends vr{constructor(e,t=Tn,n=jn,i,r,a=et,o=et,l,c=ei){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class zu extends At{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class _c extends He{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+r,_=i+1,g=new A,m=new A;for(let x=0;x<=p;x++){let y=0,b=0,w=0,T=0;if(x<=n){const S=x/n,M=S*Math.PI/2;b=-h-e*Math.cos(M),w=e*Math.sin(M),T=-e*Math.cos(M),y=S*u}else if(x<=n+r){const S=(x-n)/r;b=-h+S*t,w=e,T=0,y=u+S*d}else{const S=(x-n-r)/n,M=S*Math.PI/2;b=h+e*Math.sin(M),w=e*Math.cos(M),T=e*Math.sin(M),y=u+d+S*u}const R=Math.max(0,Math.min(1,y/f));let P=0;x===0?P=.5/i:x===p&&(P=-.5/i);for(let S=0;S<=i;S++){const M=S/i,L=M*Math.PI*2,F=Math.sin(L),k=Math.cos(L);m.x=-w*k,m.y=b,m.z=w*F,o.push(m.x,m.y,m.z),g.set(-w*k,T,w*F),g.normalize(),l.push(g.x,g.y,g.z),c.push(M+P,R)}if(x>0){const S=(x-1)*_;for(let M=0;M<i;M++){const L=S+M,F=S+M+1,k=x*_+M,q=x*_+M+1;a.push(L,F,k),a.push(F,q,k)}}}this.setIndex(a),this.setAttribute("position",new we(o,3)),this.setAttribute("normal",new we(l,3)),this.setAttribute("uv",new we(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _c(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class xc extends He{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new A,h=new Y;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new we(a,3)),this.setAttribute("normal",new we(o,3)),this.setAttribute("uv",new we(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class La extends He{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let p=0;const _=[],g=n/2;let m=0;x(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new we(u,3)),this.setAttribute("normal",new we(d,3)),this.setAttribute("uv",new we(f,2));function x(){const b=new A,w=new A;let T=0;const R=(t-e)/n;for(let P=0;P<=r;P++){const S=[],M=P/r,L=M*(t-e)+e;for(let F=0;F<=i;F++){const k=F/i,q=k*l+o,V=Math.sin(q),H=Math.cos(q);w.x=L*V,w.y=-M*n+g,w.z=L*H,u.push(w.x,w.y,w.z),b.set(V,R,H).normalize(),d.push(b.x,b.y,b.z),f.push(k,1-M),S.push(p++)}_.push(S)}for(let P=0;P<i;P++)for(let S=0;S<r;S++){const M=_[S][P],L=_[S+1][P],F=_[S+1][P+1],k=_[S][P+1];(e>0||S!==0)&&(h.push(M,L,k),T+=3),(t>0||S!==r-1)&&(h.push(L,F,k),T+=3)}c.addGroup(m,T,0),m+=T}function y(b){const w=p,T=new Y,R=new A;let P=0;const S=b===!0?e:t,M=b===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),p++;const L=p;for(let F=0;F<=i;F++){const q=F/i*l+o,V=Math.cos(q),H=Math.sin(q);R.x=S*H,R.y=g*M,R.z=S*V,u.push(R.x,R.y,R.z),d.push(0,M,0),T.x=V*.5+.5,T.y=H*.5*M+.5,f.push(T.x,T.y),p++}for(let F=0;F<i;F++){const k=w+F,q=L+F;b===!0?h.push(q,q+1,k):h.push(q+1,q,k),P+=3}c.addGroup(m,P,b===!0?1:2),m+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Da extends La{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Da(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gi extends He{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new we(r,3)),this.setAttribute("normal",new we(r.slice(),3)),this.setAttribute("uv",new we(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const y=new A,b=new A,w=new A;for(let T=0;T<t.length;T+=3)f(t[T+0],y),f(t[T+1],b),f(t[T+2],w),l(y,b,w,x)}function l(x,y,b,w){const T=w+1,R=[];for(let P=0;P<=T;P++){R[P]=[];const S=x.clone().lerp(b,P/T),M=y.clone().lerp(b,P/T),L=T-P;for(let F=0;F<=L;F++)F===0&&P===T?R[P][F]=S:R[P][F]=S.clone().lerp(M,F/L)}for(let P=0;P<T;P++)for(let S=0;S<2*(T-P)-1;S++){const M=Math.floor(S/2);S%2===0?(d(R[P][M+1]),d(R[P+1][M]),d(R[P][M])):(d(R[P][M+1]),d(R[P+1][M+1]),d(R[P+1][M]))}}function c(x){const y=new A;for(let b=0;b<r.length;b+=3)y.x=r[b+0],y.y=r[b+1],y.z=r[b+2],y.normalize().multiplyScalar(x),r[b+0]=y.x,r[b+1]=y.y,r[b+2]=y.z}function h(){const x=new A;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];const b=g(x)/2/Math.PI+.5,w=m(x)/Math.PI+.5;a.push(b,1-w)}p(),u()}function u(){for(let x=0;x<a.length;x+=6){const y=a[x+0],b=a[x+2],w=a[x+4],T=Math.max(y,b,w),R=Math.min(y,b,w);T>.9&&R<.1&&(y<.2&&(a[x+0]+=1),b<.2&&(a[x+2]+=1),w<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,y){const b=x*3;y.x=e[b+0],y.y=e[b+1],y.z=e[b+2]}function p(){const x=new A,y=new A,b=new A,w=new A,T=new Y,R=new Y,P=new Y;for(let S=0,M=0;S<r.length;S+=9,M+=6){x.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),b.set(r[S+6],r[S+7],r[S+8]),T.set(a[M+0],a[M+1]),R.set(a[M+2],a[M+3]),P.set(a[M+4],a[M+5]),w.copy(x).add(y).add(b).divideScalar(3);const L=g(w);_(T,M+0,x,L),_(R,M+2,y,L),_(P,M+4,b,L)}}function _(x,y,b,w){w<0&&x.x===1&&(a[y]=x.x-1),b.x===0&&b.z===0&&(a[y]=w/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gi(e.vertices,e.indices,e.radius,e.detail)}}class yc extends Gi{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new yc(e.radius,e.detail)}}const vo=new A,bo=new A,uh=new A,So=new hn;class Hm extends He{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(ps*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let p=0;p<l;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:_,b:g,c:m}=So;if(_.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),So.getNormal(uh),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let x=0;x<3;x++){const y=(x+1)%3,b=u[x],w=u[y],T=So[h[x]],R=So[h[y]],P=`${b}_${w}`,S=`${w}_${b}`;S in d&&d[S]?(uh.dot(d[S].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(R.x,R.y,R.z)),d[S]=null):P in d||(d[P]={index0:c[x],index1:c[y],normal:uh.clone()})}}for(const p in d)if(d[p]){const{index0:_,index1:g}=d[p];vo.fromBufferAttribute(o,_),bo.fromBufferAttribute(o,g),f.push(vo.x,vo.y,vo.z),f.push(bo.x,bo.y,bo.z)}this.setAttribute("position",new we(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Gn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){he("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new Y:new A);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new A,i=[],r=[],a=[],o=new A,l=new ze;for(let f=0;f<=e;f++){const p=f/e;i[f]=this.getTangentAt(p,new A)}r[0]=new A,a[0]=new A;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(Be(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Be(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),a[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class vc extends Gn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Y){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Wm extends vc{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Vu(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const Mo=new A,dh=new Vu,fh=new Vu,ph=new Vu;class Xm extends Gn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new A){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Mo.subVectors(i[0],i[1]).add(i[0]),c=Mo);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Mo.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Mo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),dh.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,_,g),fh.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,_,g),ph.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(dh.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),fh.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ph.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(dh.calc(l),fh.calc(l),ph.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new A().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function gf(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function fx(s,e){const t=1-s;return t*t*e}function px(s,e){return 2*(1-s)*s*e}function mx(s,e){return s*s*e}function sa(s,e,t,n){return fx(s,e)+px(s,t)+mx(s,n)}function gx(s,e){const t=1-s;return t*t*t*e}function _x(s,e){const t=1-s;return 3*t*t*s*e}function xx(s,e){return 3*(1-s)*s*s*e}function yx(s,e){return s*s*s*e}function ra(s,e,t,n,i){return gx(s,e)+_x(s,t)+xx(s,n)+yx(s,i)}class Hu extends Gn{constructor(e=new Y,t=new Y,n=new Y,i=new Y){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Y){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ra(e,i.x,r.x,a.x,o.x),ra(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class qm extends Gn{constructor(e=new A,t=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new A){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ra(e,i.x,r.x,a.x,o.x),ra(e,i.y,r.y,a.y,o.y),ra(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Wu extends Gn{constructor(e=new Y,t=new Y){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Y){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ym extends Gn{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xu extends Gn{constructor(e=new Y,t=new Y,n=new Y){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Y){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(sa(e,i.x,r.x,a.x),sa(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qu extends Gn{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(sa(e,i.x,r.x,a.x),sa(e,i.y,r.y,a.y),sa(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yu extends Gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Y){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(gf(o,l.x,c.x,h.x,u.x),gf(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Y().fromArray(i))}return this}}var Hl=Object.freeze({__proto__:null,ArcCurve:Wm,CatmullRomCurve3:Xm,CubicBezierCurve:Hu,CubicBezierCurve3:qm,EllipseCurve:vc,LineCurve:Wu,LineCurve3:Ym,QuadraticBezierCurve:Xu,QuadraticBezierCurve3:qu,SplineCurve:Yu});class $m extends Gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Hl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Hl[i.type]().fromJSON(i))}return this}}class Wl extends $m{constructor(e){super(),this.type="Path",this.currentPoint=new Y,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Wu(this.currentPoint.clone(),new Y(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Xu(this.currentPoint.clone(),new Y(e,t),new Y(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new Hu(this.currentPoint.clone(),new Y(e,t),new Y(n,i),new Y(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Yu(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){const c=new vc(e,t,n,i,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ms extends Wl{constructor(e){super(e),this.uuid=yn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Wl().fromJSON(i))}return this}}function vx(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Zm(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Ex(s,e,r,t)),s.length>80*t){o=s[0],l=s[1];let h=o,u=l;for(let d=t;d<i;d+=t){const f=s[d],p=s[d+1];f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return xa(r,a,t,o,l,c,0),a}function Zm(s,e,t,n,i){let r;if(i===Fx(s,e,t,n)>0)for(let a=e;a<t;a+=n)r=_f(a/n|0,s[a],s[a+1],r);else for(let a=t-n;a>=e;a-=n)r=_f(a/n|0,s[a],s[a+1],r);return r&&br(r,r.next)&&(va(r),r=r.next),r}function bs(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(br(t,t.next)||Mt(t.prev,t,t.next)===0)){if(va(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function xa(s,e,t,n,i,r,a){if(!s)return;!a&&r&&Ix(s,n,i,r);let o=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?Sx(s,n,i,r):bx(s)){e.push(l.i,s.i,c.i),va(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Mx(bs(s),e),xa(s,e,t,n,i,r,2)):a===2&&wx(s,e,t,n,i,r):xa(bs(s),e,t,n,i,r,1);break}}}function bx(s){const e=s.prev,t=s,n=s.next;if(Mt(e,t,n)>=0)return!1;const i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(i,r,a),u=Math.min(o,l,c),d=Math.max(i,r,a),f=Math.max(o,l,c);let p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&qr(i,o,r,l,a,c,p.x,p.y)&&Mt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Sx(s,e,t,n){const i=s.prev,r=s,a=s.next;if(Mt(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,d=a.y,f=Math.min(o,l,c),p=Math.min(h,u,d),_=Math.max(o,l,c),g=Math.max(h,u,d),m=Wh(f,p,e,t,n),x=Wh(_,g,e,t,n);let y=s.prevZ,b=s.nextZ;for(;y&&y.z>=m&&b&&b.z<=x;){if(y.x>=f&&y.x<=_&&y.y>=p&&y.y<=g&&y!==i&&y!==a&&qr(o,h,l,u,c,d,y.x,y.y)&&Mt(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=f&&b.x<=_&&b.y>=p&&b.y<=g&&b!==i&&b!==a&&qr(o,h,l,u,c,d,b.x,b.y)&&Mt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=_&&y.y>=p&&y.y<=g&&y!==i&&y!==a&&qr(o,h,l,u,c,d,y.x,y.y)&&Mt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=x;){if(b.x>=f&&b.x<=_&&b.y>=p&&b.y<=g&&b!==i&&b!==a&&qr(o,h,l,u,c,d,b.x,b.y)&&Mt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Mx(s,e){let t=s;do{const n=t.prev,i=t.next.next;!br(n,i)&&Km(n,t,t.next,i)&&ya(n,i)&&ya(i,n)&&(e.push(n.i,t.i,i.i),va(t),va(t.next),t=s=i),t=t.next}while(t!==s);return bs(t)}function wx(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Dx(a,o)){let l=jm(a,o);a=bs(a,a.next),l=bs(l,l.next),xa(a,e,t,n,i,r,0),xa(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Ex(s,e,t,n){const i=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=Zm(s,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Lx(c))}i.sort(Tx);for(let r=0;r<i.length;r++)t=Ax(i[r],t);return t}function Tx(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function Ax(s,e){const t=Cx(s,e);if(!t)return e;const n=jm(t,s);return bs(n,n.next),bs(t,t.next)}function Cx(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,a;if(br(s,t))return t;do{if(br(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Jm(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){const u=Math.abs(i-t.y)/(n-t.x);ya(t,s)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&Rx(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function Rx(s,e){return Mt(s.prev,s,e.prev)<0&&Mt(e.next,s,s.next)<0}function Ix(s,e,t,n){let i=s;do i.z===0&&(i.z=Wh(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Px(i)}function Px(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,t*=2}while(e>1);return s}function Wh(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Lx(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Jm(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function qr(s,e,t,n,i,r,a,o){return!(s===a&&e===o)&&Jm(s,e,t,n,i,r,a,o)}function Dx(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Nx(s,e)&&(ya(s,e)&&ya(e,s)&&Ux(s,e)&&(Mt(s.prev,s,e.prev)||Mt(s,e.prev,e))||br(s,e)&&Mt(s.prev,s,s.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function br(s,e){return s.x===e.x&&s.y===e.y}function Km(s,e,t,n){const i=Eo(Mt(s,e,t)),r=Eo(Mt(s,e,n)),a=Eo(Mt(t,n,s)),o=Eo(Mt(t,n,e));return!!(i!==r&&a!==o||i===0&&wo(s,t,e)||r===0&&wo(s,n,e)||a===0&&wo(t,s,n)||o===0&&wo(t,e,n))}function wo(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Eo(s){return s>0?1:s<0?-1:0}function Nx(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Km(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function ya(s,e){return Mt(s.prev,s,s.next)<0?Mt(s,e,s.next)>=0&&Mt(s,s.prev,e)>=0:Mt(s,e,s.prev)<0||Mt(s,s.next,e)<0}function Ux(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function jm(s,e){const t=Xh(s.i,s.x,s.y),n=Xh(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function _f(s,e,t,n){const i=Xh(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function va(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Xh(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Fx(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class Ox{static triangulate(e,t,n=2){return vx(e,t,n)}}class Fn{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Fn.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];xf(e),yf(n,e);let a=e.length;t.forEach(xf);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,yf(n,t[l]);const o=Ox.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function xf(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function yf(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class bc extends He{constructor(e=new ms([new Y(.5,.5),new Y(-.5,.5),new Y(-.5,-.5),new Y(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new we(i,3)),this.setAttribute("uv",new we(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:kx;let y,b=!1,w,T,R,P;if(m){y=m.getSpacedPoints(h),b=!0,d=!1;const K=m.isCatmullRomCurve3?m.closed:!1;w=m.computeFrenetFrames(h,K),T=new A,R=new A,P=new A}d||(g=0,f=0,p=0,_=0);const S=o.extractPoints(c);let M=S.shape;const L=S.holes;if(!Fn.isClockWise(M)){M=M.reverse();for(let K=0,ne=L.length;K<ne;K++){const j=L[K];Fn.isClockWise(j)&&(L[K]=j.reverse())}}function k(K){const j=10000000000000001e-36;let ge=K[0];for(let I=1;I<=K.length;I++){const De=I%K.length,ye=K[De],Oe=ye.x-ge.x,re=ye.y-ge.y,C=Oe*Oe+re*re,v=Math.max(Math.abs(ye.x),Math.abs(ye.y),Math.abs(ge.x),Math.abs(ge.y)),N=j*v*v;if(C<=N){K.splice(De,1),I--;continue}ge=ye}}k(M),L.forEach(k);const q=L.length,V=M;for(let K=0;K<q;K++){const ne=L[K];M=M.concat(ne)}function H(K,ne,j){return ne||Pe("ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(ne,j)}const B=M.length;function Q(K,ne,j){let ge,I,De;const ye=K.x-ne.x,Oe=K.y-ne.y,re=j.x-K.x,C=j.y-K.y,v=ye*ye+Oe*Oe,N=ye*C-Oe*re;if(Math.abs(N)>Number.EPSILON){const W=Math.sqrt(v),Z=Math.sqrt(re*re+C*C),X=ne.x-Oe/W,Re=ne.y+ye/W,ae=j.x-C/Z,Ae=j.y+re/Z,ke=((ae-X)*C-(Ae-Re)*re)/(ye*C-Oe*re);ge=X+ye*ke-K.x,I=Re+Oe*ke-K.y;const te=ge*ge+I*I;if(te<=2)return new Y(ge,I);De=Math.sqrt(te/2)}else{let W=!1;ye>Number.EPSILON?re>Number.EPSILON&&(W=!0):ye<-Number.EPSILON?re<-Number.EPSILON&&(W=!0):Math.sign(Oe)===Math.sign(C)&&(W=!0),W?(ge=-Oe,I=ye,De=Math.sqrt(v)):(ge=ye,I=Oe,De=Math.sqrt(v/2))}return new Y(ge/De,I/De)}const me=[];for(let K=0,ne=V.length,j=ne-1,ge=K+1;K<ne;K++,j++,ge++)j===ne&&(j=0),ge===ne&&(ge=0),me[K]=Q(V[K],V[j],V[ge]);const oe=[];let ue,Xe=me.concat();for(let K=0,ne=q;K<ne;K++){const j=L[K];ue=[];for(let ge=0,I=j.length,De=I-1,ye=ge+1;ge<I;ge++,De++,ye++)De===I&&(De=0),ye===I&&(ye=0),ue[ge]=Q(j[ge],j[De],j[ye]);oe.push(ue),Xe=Xe.concat(ue)}let Ve;if(g===0)Ve=Fn.triangulateShape(V,L);else{const K=[],ne=[];for(let j=0;j<g;j++){const ge=j/g,I=f*Math.cos(ge*Math.PI/2),De=p*Math.sin(ge*Math.PI/2)+_;for(let ye=0,Oe=V.length;ye<Oe;ye++){const re=H(V[ye],me[ye],De);Fe(re.x,re.y,-I),ge===0&&K.push(re)}for(let ye=0,Oe=q;ye<Oe;ye++){const re=L[ye];ue=oe[ye];const C=[];for(let v=0,N=re.length;v<N;v++){const W=H(re[v],ue[v],De);Fe(W.x,W.y,-I),ge===0&&C.push(W)}ge===0&&ne.push(C)}}Ve=Fn.triangulateShape(K,ne)}const ut=Ve.length,dt=p+_;for(let K=0;K<B;K++){const ne=d?H(M[K],Xe[K],dt):M[K];b?(R.copy(w.normals[0]).multiplyScalar(ne.x),T.copy(w.binormals[0]).multiplyScalar(ne.y),P.copy(y[0]).add(R).add(T),Fe(P.x,P.y,P.z)):Fe(ne.x,ne.y,0)}for(let K=1;K<=h;K++)for(let ne=0;ne<B;ne++){const j=d?H(M[ne],Xe[ne],dt):M[ne];b?(R.copy(w.normals[K]).multiplyScalar(j.x),T.copy(w.binormals[K]).multiplyScalar(j.y),P.copy(y[K]).add(R).add(T),Fe(P.x,P.y,P.z)):Fe(j.x,j.y,u/h*K)}for(let K=g-1;K>=0;K--){const ne=K/g,j=f*Math.cos(ne*Math.PI/2),ge=p*Math.sin(ne*Math.PI/2)+_;for(let I=0,De=V.length;I<De;I++){const ye=H(V[I],me[I],ge);Fe(ye.x,ye.y,u+j)}for(let I=0,De=L.length;I<De;I++){const ye=L[I];ue=oe[I];for(let Oe=0,re=ye.length;Oe<re;Oe++){const C=H(ye[Oe],ue[Oe],ge);b?Fe(C.x,C.y+y[h-1].y,y[h-1].x+j):Fe(C.x,C.y,u+j)}}}$(),ee();function $(){const K=i.length/3;if(d){let ne=0,j=B*ne;for(let ge=0;ge<ut;ge++){const I=Ve[ge];Ee(I[2]+j,I[1]+j,I[0]+j)}ne=h+g*2,j=B*ne;for(let ge=0;ge<ut;ge++){const I=Ve[ge];Ee(I[0]+j,I[1]+j,I[2]+j)}}else{for(let ne=0;ne<ut;ne++){const j=Ve[ne];Ee(j[2],j[1],j[0])}for(let ne=0;ne<ut;ne++){const j=Ve[ne];Ee(j[0]+B*h,j[1]+B*h,j[2]+B*h)}}n.addGroup(K,i.length/3-K,0)}function ee(){const K=i.length/3;let ne=0;Se(V,ne),ne+=V.length;for(let j=0,ge=L.length;j<ge;j++){const I=L[j];Se(I,ne),ne+=I.length}n.addGroup(K,i.length/3-K,1)}function Se(K,ne){let j=K.length;for(;--j>=0;){const ge=j;let I=j-1;I<0&&(I=K.length-1);for(let De=0,ye=h+g*2;De<ye;De++){const Oe=B*De,re=B*(De+1),C=ne+ge+Oe,v=ne+I+Oe,N=ne+I+re,W=ne+ge+re;Qe(C,v,N,W)}}}function Fe(K,ne,j){l.push(K),l.push(ne),l.push(j)}function Ee(K,ne,j){ft(K),ft(ne),ft(j);const ge=i.length/3,I=x.generateTopUV(n,i,ge-3,ge-2,ge-1);qe(I[0]),qe(I[1]),qe(I[2])}function Qe(K,ne,j,ge){ft(K),ft(ne),ft(ge),ft(ne),ft(j),ft(ge);const I=i.length/3,De=x.generateSideWallUV(n,i,I-6,I-3,I-2,I-1);qe(De[0]),qe(De[1]),qe(De[3]),qe(De[1]),qe(De[2]),qe(De[3])}function ft(K){i.push(l[K*3+0]),i.push(l[K*3+1]),i.push(l[K*3+2])}function qe(K){r.push(K.x),r.push(K.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Bx(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Hl[i.type]().fromJSON(i)),new bc(n,e.options)}}const kx={generateTopUV:function(s,e,t,n,i){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new Y(r,a),new Y(o,l),new Y(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],p=e[i*3+2],_=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Y(a,1-l),new Y(c,1-u),new Y(d,1-p),new Y(_,1-m)]:[new Y(o,1-l),new Y(h,1-u),new Y(f,1-p),new Y(g,1-m)]}};function Bx(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Sc extends Gi{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Sc(e.radius,e.detail)}}class Mc extends He{constructor(e=[new Y(0,-.5),new Y(.5,0),new Y(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Be(i,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/t,u=new A,d=new Y,f=new A,p=new A,_=new A;let g=0,m=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:g=e[x+1].x-e[x].x,m=e[x+1].y-e[x].y,f.x=m*1,f.y=-g,f.z=m*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:g=e[x+1].x-e[x].x,m=e[x+1].y-e[x].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(p)}for(let x=0;x<=t;x++){const y=n+x*h*i,b=Math.sin(y),w=Math.cos(y);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*b,u.y=e[T].y,u.z=e[T].x*w,a.push(u.x,u.y,u.z),d.x=x/t,d.y=T/(e.length-1),o.push(d.x,d.y);const R=l[3*T+0]*b,P=l[3*T+1],S=l[3*T+0]*w;c.push(R,P,S)}}for(let x=0;x<t;x++)for(let y=0;y<e.length-1;y++){const b=y+x*e.length,w=b,T=b+e.length,R=b+e.length+1,P=b+1;r.push(w,T,P),r.push(R,P,T)}this.setIndex(r),this.setAttribute("position",new we(a,3)),this.setAttribute("uv",new we(o,2)),this.setAttribute("normal",new we(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mc(e.points,e.segments,e.phiStart,e.phiLength)}}class Na extends Gi{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Na(e.radius,e.detail)}}class ii extends He{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,f=[],p=[],_=[],g=[];for(let m=0;m<h;m++){const x=m*d-a;for(let y=0;y<c;y++){const b=y*u-r;p.push(b,-x,0),_.push(0,0,1),g.push(y/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<o;x++){const y=x+c*m,b=x+c*(m+1),w=x+1+c*(m+1),T=x+1+c*m;f.push(y,b,T),f.push(b,w,T)}this.setIndex(f),this.setAttribute("position",new we(p,3)),this.setAttribute("normal",new we(_,3)),this.setAttribute("uv",new we(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ii(e.width,e.height,e.widthSegments,e.heightSegments)}}class wc extends He{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=e;const d=(t-e)/i,f=new A,p=new Y;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){const m=r+g/n*a;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}u+=d}for(let _=0;_<i;_++){const g=_*(n+1);for(let m=0;m<n;m++){const x=m+g,y=x,b=x+n+1,w=x+n+2,T=x+1;o.push(y,b,T),o.push(b,w,T)}}this.setIndex(o),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(c,3)),this.setAttribute("uv",new we(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ec extends He{constructor(e=new ms([new Y(0,.5),new Y(-.5,-.5),new Y(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new we(i,3)),this.setAttribute("normal",new we(r,3)),this.setAttribute("uv",new we(a,2));function c(h){const u=i.length/3,d=h.extractPoints(t);let f=d.shape;const p=d.holes;Fn.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){const x=p[g];Fn.isClockWise(x)===!0&&(p[g]=x.reverse())}const _=Fn.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){const x=p[g];f=f.concat(x)}for(let g=0,m=f.length;g<m;g++){const x=f[g];i.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let g=0,m=_.length;g<m;g++){const x=_[g],y=x[0]+u,b=x[1]+u,w=x[2]+u;n.push(y,b,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Gx(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const a=t[e.shapes[i]];n.push(a)}return new Ec(n,e.curveSegments)}}function Gx(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class Ua extends He{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new A,d=new A,f=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){const x=[],y=m/n;let b=0;m===0&&a===0?b=.5/t:m===n&&l===Math.PI&&(b=-.5/t);for(let w=0;w<=t;w++){const T=w/t;u.x=-e*Math.cos(i+T*r)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(i+T*r)*Math.sin(a+y*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(T+b,1-y),x.push(c++)}h.push(x)}for(let m=0;m<n;m++)for(let x=0;x<t;x++){const y=h[m][x+1],b=h[m][x],w=h[m+1][x],T=h[m+1][x+1];(m!==0||a>0)&&f.push(y,b,T),(m!==n-1||l<Math.PI)&&f.push(b,w,T)}this.setIndex(f),this.setAttribute("position",new we(p,3)),this.setAttribute("normal",new we(_,3)),this.setAttribute("uv",new we(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ua(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Tc extends Gi{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Tc(e.radius,e.detail)}}class Ac extends He{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new A,u=new A,d=new A;for(let f=0;f<=n;f++)for(let p=0;p<=i;p++){const _=p/i*r,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(_),u.y=(e+t*Math.cos(g))*Math.sin(_),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(p/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=i;p++){const _=(i+1)*f+p-1,g=(i+1)*(f-1)+p-1,m=(i+1)*(f-1)+p,x=(i+1)*f+p;a.push(_,g,x),a.push(g,m,x)}this.setIndex(a),this.setAttribute("position",new we(o,3)),this.setAttribute("normal",new we(l,3)),this.setAttribute("uv",new we(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ac(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Cc extends He{constructor(e=1,t=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);const o=[],l=[],c=[],h=[],u=new A,d=new A,f=new A,p=new A,_=new A,g=new A,m=new A;for(let y=0;y<=n;++y){const b=y/n*r*Math.PI*2;x(b,r,a,e,f),x(b+.01,r,a,e,p),g.subVectors(p,f),m.addVectors(p,f),_.crossVectors(g,m),m.crossVectors(_,g),_.normalize(),m.normalize();for(let w=0;w<=i;++w){const T=w/i*Math.PI*2,R=-t*Math.cos(T),P=t*Math.sin(T);u.x=f.x+(R*m.x+P*_.x),u.y=f.y+(R*m.y+P*_.y),u.z=f.z+(R*m.z+P*_.z),l.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),h.push(y/n),h.push(w/i)}}for(let y=1;y<=n;y++)for(let b=1;b<=i;b++){const w=(i+1)*(y-1)+(b-1),T=(i+1)*y+(b-1),R=(i+1)*y+b,P=(i+1)*(y-1)+b;o.push(w,T,P),o.push(T,R,P)}this.setIndex(o),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(c,3)),this.setAttribute("uv",new we(h,2));function x(y,b,w,T,R){const P=Math.cos(y),S=Math.sin(y),M=w/b*y,L=Math.cos(M);R.x=T*(2+L)*.5*P,R.y=T*(2+L)*S*.5,R.z=T*Math.sin(M)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cc(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Rc extends He{constructor(e=new qu(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new A,l=new A,c=new Y;let h=new A;const u=[],d=[],f=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new we(u,3)),this.setAttribute("normal",new we(d,3)),this.setAttribute("uv",new we(f,2));function _(){for(let y=0;y<t;y++)g(y);g(r===!1?t:0),x(),m()}function g(y){h=e.getPointAt(y/t,h);const b=a.normals[y],w=a.binormals[y];for(let T=0;T<=i;T++){const R=T/i*Math.PI*2,P=Math.sin(R),S=-Math.cos(R);l.x=S*b.x+P*w.x,l.y=S*b.y+P*w.y,l.z=S*b.z+P*w.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function m(){for(let y=1;y<=t;y++)for(let b=1;b<=i;b++){const w=(i+1)*(y-1)+(b-1),T=(i+1)*y+(b-1),R=(i+1)*y+b,P=(i+1)*(y-1)+b;p.push(w,T,P),p.push(T,R,P)}}function x(){for(let y=0;y<=t;y++)for(let b=0;b<=i;b++)c.x=y/t,c.y=b/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Rc(new Hl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Qm extends He{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new A,r=new A;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],d=u.start,f=u.count;for(let p=d,_=d+f;p<_;p+=3)for(let g=0;g<3;g++){const m=o.getX(p+g),x=o.getX(p+(g+1)%3);i.fromBufferAttribute(a,m),r.fromBufferAttribute(a,x),vf(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,u=3*o+(c+1)%3;i.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),vf(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new we(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function vf(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var bf=Object.freeze({__proto__:null,BoxGeometry:ws,CapsuleGeometry:_c,CircleGeometry:xc,ConeGeometry:Da,CylinderGeometry:La,DodecahedronGeometry:yc,EdgesGeometry:Hm,ExtrudeGeometry:bc,IcosahedronGeometry:Sc,LatheGeometry:Mc,OctahedronGeometry:Na,PlaneGeometry:ii,PolyhedronGeometry:Gi,RingGeometry:wc,ShapeGeometry:Ec,SphereGeometry:Ua,TetrahedronGeometry:Tc,TorusGeometry:Ac,TorusKnotGeometry:Cc,TubeGeometry:Rc,WireframeGeometry:Qm});class eg extends Xt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ve(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class $u extends An{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Fa extends Xt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bi,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tg extends Fa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Y(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Be(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ng extends Xt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ve(16777215),this.specular=new ve(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bi,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ig extends Xt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ve(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bi,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class sg extends Xt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bi,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class rg extends Xt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bi,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zu extends Xt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ju extends Xt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ag extends Xt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ve(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bi,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}}class og extends tn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function us(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function lg(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function qh(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function Ku(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}function zx(s,e,t,n,i=30){const r=s.clone();r.name=e;const a=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],h=c.getValueSize(),u=[],d=[];for(let f=0;f<c.times.length;++f){const p=c.times[f]*i;if(!(p<t||p>=n)){u.push(c.times[f]);for(let _=0;_<h;++_)d.push(c.values[f*h+_])}}u.length!==0&&(c.times=us(u,c.times.constructor),c.values=us(d,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r}function Vx(s,e=0,t=s,n=30){n<=0&&(n=30);const i=t.tracks.length,r=e/n;for(let a=0;a<i;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=s.tracks.find(function(m){return m.name===o.name&&m.ValueTypeName===l});if(c===void 0)continue;let h=0;const u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const p=o.times.length-1;let _;if(r<=o.times[0]){const m=h,x=u-h;_=o.values.slice(m,x)}else if(r>=o.times[p]){const m=p*u+h,x=m+u-h;_=o.values.slice(m,x)}else{const m=o.createInterpolant(),x=h,y=u-h;m.evaluate(r),_=m.resultBuffer.slice(x,y)}l==="quaternion"&&new Wt().fromArray(_).normalize().conjugate().toArray(_);const g=c.times.length;for(let m=0;m<g;++m){const x=m*f+d;if(l==="quaternion")Wt.multiplyQuaternionsFlat(c.values,x,_,0,c.values,x);else{const y=f-d*2;for(let b=0;b<y;++b)c.values[x+b]-=_[b]}}}return s.blendMode=Du,s}class Hx{static convertArray(e,t){return us(e,t)}static isTypedArray(e){return Am(e)}static getKeyframeOrder(e){return lg(e)}static sortedArray(e,t,n){return qh(e,t,n)}static flattenJSON(e,t,n,i){Ku(e,t,n,i)}static subclip(e,t,n,i,r=30){return zx(e,t,n,i,r)}static makeClipAdditive(e,t=0,n=e,i=30){return Vx(e,t,n,i)}}class Oa{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class cg extends Oa{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cs,endingEnd:cs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case hs:r=e,o=2*t-n;break;case fa:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case hs:a=e,l=2*n-t;break;case fa:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),_=p*p,g=_*p,m=-d*g+2*d*_-d*p,x=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*p+1,y=(-1-f)*g+(1.5+f)*_+.5*p,b=f*g-f*_;for(let w=0;w!==o;++w)r[w]=m*a[h+w]+x*a[c+w]+y*a[l+w]+b*a[u+w];return r}}class ju extends Oa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}}class hg extends Oa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Cn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=us(t,this.TimeBufferType),this.values=us(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:us(e.times,Array),values:us(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new hg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ju(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new cg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case da:t=this.InterpolantFactoryMethodDiscrete;break;case Gl:t=this.InterpolantFactoryMethodLinear;break;case zo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return he("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return da;case this.InterpolantFactoryMethodLinear:return Gl;case this.InterpolantFactoryMethodSmooth:return zo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Pe("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Pe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Pe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Pe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Am(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){Pe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===zo,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){const _=t[u+p];if(_!==t[d+p]||_!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=Gl;class Es extends Cn{constructor(e,t,n){super(e,t,n)}}Es.prototype.ValueTypeName="bool";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=da;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;class Qu extends Cn{constructor(e,t,n,i){super(e,t,n,i)}}Qu.prototype.ValueTypeName="color";class ba extends Cn{constructor(e,t,n,i){super(e,t,n,i)}}ba.prototype.ValueTypeName="number";class ug extends Oa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Wt.slerpFlat(r,0,a,c-o,a,c,l);return r}}class ka extends Cn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new ug(this.times,this.values,this.getValueSize(),e)}}ka.prototype.ValueTypeName="quaternion";ka.prototype.InterpolantFactoryMethodSmooth=void 0;class Ts extends Cn{constructor(e,t,n){super(e,t,n)}}Ts.prototype.ValueTypeName="string";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=da;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;class Sa extends Cn{constructor(e,t,n,i){super(e,t,n,i)}}Sa.prototype.ValueTypeName="vector";class Ma{constructor(e="",t=-1,n=[],i=ic){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=yn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Xx(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Cn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=lg(l);l=qh(l,1,h),c=qh(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new ba(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(he("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Pe("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,p,_){if(f.length!==0){const g=[],m=[];Ku(f,g,m,p),g.length!==0&&_.push(new u(d,g,m))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let _=0;_<d[p].morphTargets.length;_++)f[d[p].morphTargets[_]]=-1;for(const _ in f){const g=[],m=[];for(let x=0;x!==d[p].morphTargets.length;++x){const y=d[p];g.push(y.time),m.push(y.morphTarget===_?1:0)}i.push(new ba(".morphTargetInfluence["+_+"]",g,m))}l=f.length*a}else{const f=".bones["+t[u].name+"]";n(Sa,f+".position",d,"pos",i),n(ka,f+".quaternion",d,"rot",i),n(Sa,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Wx(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ba;case"vector":case"vector2":case"vector3":case"vector4":return Sa;case"color":return Qu;case"quaternion":return ka;case"bool":case"boolean":return Es;case"string":return Ts}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Xx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Wx(s.type);if(s.times===void 0){const t=[],n=[];Ku(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Zn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class ed{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const dg=new ed;class dn{constructor(e){this.manager=e!==void 0?e:dg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}dn.DEFAULT_MATERIAL_NAME="__DEFAULT";const hi={};class qx extends Error{constructor(e,t){super(e),this.response=t}}class Si extends dn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Zn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(hi[e]!==void 0){hi[e].push({onLoad:t,onProgress:n,onError:i});return}hi[e]=[],hi[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&he("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=hi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0;let _=0;const g=new ReadableStream({start(m){x();function x(){u.read().then(({done:y,value:b})=>{if(y)m.close();else{_+=b.byteLength;const w=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let T=0,R=h.length;T<R;T++){const P=h[T];P.onProgress&&P.onProgress(w)}m.enqueue(b),x()}},y=>{m.error(y)})}}});return new Response(g)}else throw new qx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Zn.add(`file:${e}`,c);const h=hi[e];delete hi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=hi[e];if(h===void 0)throw this.manager.itemError(e),c;delete hi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Yx extends dn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new Si(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):Pe(l),r.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=Ma.parse(e[n]);t.push(i)}return t}}class $x extends dn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=[],o=new gc,l=new Si(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(u){l.load(e[u],function(d){const f=r.parse(d,!0);a[u]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=vt),o.image=a,o.format=f.format,o.needsUpdate=!0,t&&t(o))},n,i)}if(Array.isArray(e))for(let u=0,d=e.length;u<d;++u)h(u);else l.load(e,function(u){const d=r.parse(u,!0);if(d.isCubemap){const f=d.mipmaps.length/d.mipmapCount;for(let p=0;p<f;p++){a[p]={mipmaps:[]};for(let _=0;_<d.mipmapCount;_++)a[p].mipmaps.push(d.mipmaps[p*d.mipmapCount+_]),a[p].format=d.format,a[p].width=d.width,a[p].height=d.height}o.image=a}else o.image.width=d.width,o.image.height=d.height,o.mipmaps=d.mipmaps;d.mipmapCount===1&&(o.minFilter=vt),o.format=d.format,o.needsUpdate=!0,t&&t(o)},n,i);return o}}const qs=new WeakMap;class wa extends dn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Zn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=qs.get(a);u===void 0&&(u=[],qs.set(a,u)),u.push({onLoad:t,onError:i})}return a}const o=ga("img");function l(){h(),t&&t(this);const u=qs.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}qs.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),Zn.remove(`image:${e}`);const d=qs.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onError&&p.onError(u)}qs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Zn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Zx extends dn{constructor(e){super(e)}load(e,t,n,i){const r=new Ca;r.colorSpace=Ht;const a=new wa(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(h){r.images[c]=h,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}}class Jx extends dn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new kn,o=new Si(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(i!==void 0)i(h);else{h(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:un,a.wrapT=c.wrapT!==void 0?c.wrapT:un,a.magFilter=c.magFilter!==void 0?c.magFilter:vt,a.minFilter=c.minFilter!==void 0?c.minFilter:vt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=$n),c.mipmapCount===1&&(a.minFilter=vt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,i),a}}class Ba extends dn{constructor(e){super(e)}load(e,t,n,i){const r=new At,a=new wa(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class zi extends st{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class fg extends zi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const mh=new ze,Sf=new A,Mf=new A;class td{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Y(512,512),this.mapType=cn,this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wr,this._frameExtents=new Y(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Sf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sf),Mf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mf),t.updateMatrixWorld(),mh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(mh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Kx extends td{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=_r*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class pg extends zi{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Kx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class jx extends td{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0}}class mg extends zi{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new jx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Er extends cc{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Qx extends td{constructor(){super(new Er(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nd extends zi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.shadow=new Qx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class id extends zi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class gg extends zi{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class sd{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new A)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*r)),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],1.092548*(n*r)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*r),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],2*.429043*n*r),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}}class _g extends zi{constructor(e=new sd,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Ic extends dn{constructor(e){super(e),this.textures={}}load(e,t,n,i){const r=this,a=new Si(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):Pe(l),r.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(r){return t[r]===void 0&&he("MaterialLoader: Undefined texture",r),t[r]}const i=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(i.allowOverride=e.allowOverride),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const r in e.uniforms){const a=e.uniforms[r];switch(i.uniforms[r]={},a.type){case"t":i.uniforms[r].value=n(a.value);break;case"c":i.uniforms[r].value=new ve().setHex(a.value);break;case"v2":i.uniforms[r].value=new Y().fromArray(a.value);break;case"v3":i.uniforms[r].value=new A().fromArray(a.value);break;case"v4":i.uniforms[r].value=new _t().fromArray(a.value);break;case"m3":i.uniforms[r].value=new Ye().fromArray(a.value);break;case"m4":i.uniforms[r].value=new ze().fromArray(a.value);break;default:i.uniforms[r].value=a.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)i.extensions[r]=e.extensions[r];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new Y().fromArray(r)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new Y().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return Ic.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:eg,SpriteMaterial:Mr,RawShaderMaterial:$u,ShaderMaterial:An,PointsMaterial:Ia,MeshPhysicalMaterial:tg,MeshStandardMaterial:Fa,MeshPhongMaterial:ng,MeshToonMaterial:ig,MeshNormalMaterial:sg,MeshLambertMaterial:rg,MeshDepthMaterial:Zu,MeshDistanceMaterial:Ju,MeshBasicMaterial:Bn,MeshMatcapMaterial:ag,LineDashedMaterial:og,LineBasicMaterial:tn,Material:Xt};return new t[e]}}class Yh{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class xg extends He{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class yg extends dn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new Si(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):Pe(l),r.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(f,p){if(t[p]!==void 0)return t[p];const g=f.interleavedBuffers[p],m=r(f,g.buffer),x=sr(g.type,m),y=new dc(x,g.stride);return y.uuid=g.uuid,t[p]=y,y}function r(f,p){if(n[p]!==void 0)return n[p];const g=f.arrayBuffers[p],m=new Uint32Array(g).buffer;return n[p]=m,m}const a=e.isInstancedBufferGeometry?new xg:new He,o=e.data.index;if(o!==void 0){const f=sr(o.type,o.array);a.setIndex(new tt(f,1))}const l=e.data.attributes;for(const f in l){const p=l[f];let _;if(p.isInterleavedBufferAttribute){const g=i(e.data,p.data);_=new vs(g,p.itemSize,p.offset,p.normalized)}else{const g=sr(p.type,p.array),m=p.isInstancedBufferAttribute?yr:tt;_=new m(g,p.itemSize,p.normalized)}p.name!==void 0&&(_.name=p.name),p.usage!==void 0&&_.setUsage(p.usage),a.setAttribute(f,_)}const c=e.data.morphAttributes;if(c)for(const f in c){const p=c[f],_=[];for(let g=0,m=p.length;g<m;g++){const x=p[g];let y;if(x.isInterleavedBufferAttribute){const b=i(e.data,x.data);y=new vs(b,x.itemSize,x.offset,x.normalized)}else{const b=sr(x.type,x.array);y=new tt(b,x.itemSize,x.normalized)}x.name!==void 0&&(y.name=x.name),_.push(y)}a.morphAttributes[f]=_}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const u=e.data.groups||e.data.drawcalls||e.data.offsets;if(u!==void 0)for(let f=0,p=u.length;f!==p;++f){const _=u[f];a.addGroup(_.start,_.count,_.materialIndex)}const d=e.data.boundingSphere;return d!==void 0&&(a.boundingSphere=new Ot().fromJSON(d)),e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class ey extends dn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=this.path===""?Yh.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const o=new Si(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(u){i!==void 0&&i(u),u("ObjectLoader: Can't parse "+e+".",u.message);return}const h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),Pe("ObjectLoader: Can't load "+e);return}r.parse(c,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?Yh.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const r=new Si(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const a=await r.loadAsync(e,t),o=JSON.parse(a),l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),a=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,a),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,r,l,o,n),h=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),t!==void 0){let u=!1;for(const d in a)if(a[d].data instanceof HTMLImageElement){u=!0;break}u===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),r=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,r),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,i,o,a,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const r=new ms().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=new fc().fromJSON(e[r],i);n[o.uuid]=o}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new yg;for(let r=0,a=e.length;r<a;r++){let o;const l=e[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(l);break;default:l.type in bf?o=bf[l.type].fromJSON(l,t):he(`ObjectLoader: Unsupported geometry type "${l.type}"`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),n[l.uuid]=o}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const r=new Ic;r.setTextures(t);for(let a=0,o=e.length;a<o;a++){const l=e[a];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],r=Ma.parse(i);t[r.uuid]=r}return t}parseImages(e,t){const n=this,i={};let r;function a(l){return n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(h)}else return l.data?{data:sr(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new ed(t);r=new wa(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=e.length;c<h;c++){const u=e[c],d=u.url;if(Array.isArray(d)){const f=[];for(let p=0,_=d.length;p<_;p++){const g=d[p],m=o(g);m!==null&&(m instanceof HTMLImageElement?f.push(m):f.push(new kn(m.data,m.width,m.height)))}i[u.uuid]=new Ni(f)}else{const f=o(u.url);i[u.uuid]=new Ni(f)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function r(a){if(typeof a=="string"){const o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await i.loadAsync(l)}else return a.data?{data:sr(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){i=new wa(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){const l=e[a],c=l.url;if(Array.isArray(c)){const h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=await r(f);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new kn(p.data,p.width,p.height)))}n[l.uuid]=new Ni(h)}else{const h=await r(l.url);n[l.uuid]=new Ni(h)}}}return n}parseTextures(e,t){function n(r,a){return typeof r=="number"?r:(he("ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}const i={};if(e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=e[r];o.image===void 0&&he('ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&he("ObjectLoader: Undefined image",o.image);const l=t[o.image],c=l.data;let h;Array.isArray(c)?(h=new Ca,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new kn:h=new At,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=n(o.mapping,ty)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=n(o.wrap[0],wf),h.wrapT=n(o.wrap[1],wf)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=n(o.minFilter,Ef)),o.magFilter!==void 0&&(h.magFilter=n(o.magFilter,Ef)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.userData!==void 0&&(h.userData=o.userData),i[o.uuid]=h}return i}parseObject(e,t,n,i,r){let a;function o(d){return t[d]===void 0&&he("ObjectLoader: Undefined geometry",d),t[d]}function l(d){if(d!==void 0){if(Array.isArray(d)){const f=[];for(let p=0,_=d.length;p<_;p++){const g=d[p];n[g]===void 0&&he("ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[d]===void 0&&he("ObjectLoader: Undefined material",d),n[d]}}function c(d){return i[d]===void 0&&he("ObjectLoader: Undefined texture",d),i[d]}let h,u;switch(e.type){case"Scene":a=new Bu,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new ve(e.background):a.background=c(e.background)),e.environment!==void 0&&(a.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new uc(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new hc(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new kt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new Er(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new id(e.color,e.intensity);break;case"DirectionalLight":a=new nd(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new mg(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new gg(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new pg(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new fg(e.color,e.groundColor,e.intensity);break;case"LightProbe":const d=new sd().fromArray(e.sh);a=new _g(d,e.intensity);break;case"SkinnedMesh":h=o(e.geometry),u=l(e.material),a=new Om(h,u),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":h=o(e.geometry),u=l(e.material),a=new bt(h,u);break;case"InstancedMesh":h=o(e.geometry),u=l(e.material);const f=e.count,p=e.instanceMatrix,_=e.instanceColor;a=new km(h,u,f),a.instanceMatrix=new yr(new Float32Array(p.array),16),_!==void 0&&(a.instanceColor=new yr(new Float32Array(_.array),_.itemSize));break;case"BatchedMesh":h=o(e.geometry),u=l(e.material),a=new Bm(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,u),a.geometry=h,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._geometryInfo=e.geometryInfo.map(g=>{let m=null,x=null;return g.boundingBox!==void 0&&(m=new Bt().fromJSON(g.boundingBox)),g.boundingSphere!==void 0&&(x=new Ot().fromJSON(g.boundingSphere)),{...g,boundingBox:m,boundingSphere:x}}),a._instanceInfo=e.instanceInfo,a._availableInstanceIds=e._availableInstanceIds,a._availableGeometryIds=e._availableGeometryIds,a._nextIndexStart=e.nextIndexStart,a._nextVertexStart=e.nextVertexStart,a._geometryCount=e.geometryCount,a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._matricesTexture=c(e.matricesTexture.uuid),a._indirectTexture=c(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=c(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(a.boundingSphere=new Ot().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(a.boundingBox=new Bt().fromJSON(e.boundingBox));break;case"LOD":a=new Fm;break;case"Line":a=new ki(o(e.geometry),l(e.material));break;case"LineLoop":a=new Gm(o(e.geometry),l(e.material));break;case"LineSegments":a=new ni(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":a=new mc(o(e.geometry),l(e.material));break;case"Sprite":a=new Ra(l(e.material));break;case"Group":a=new rr;break;case"Bone":a=new Gu;break;default:a=new st}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const d=e.children;for(let f=0;f<d.length;f++)a.add(this.parseObject(d[f],t,n,i,r))}if(e.animations!==void 0){const d=e.animations;for(let f=0;f<d.length;f++){const p=d[f];a.animations.push(r[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const d=e.levels;for(let f=0;f<d.length;f++){const p=d[f],_=a.getObjectByProperty("uuid",p.object);_!==void 0&&a.addLevel(_,p.distance,p.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?he("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new st}})}}const ty={UVMapping:Jl,CubeReflectionMapping:jn,CubeRefractionMapping:Fi,EquirectangularReflectionMapping:ca,EquirectangularRefractionMapping:ha,CubeUVReflectionMapping:Sr},wf={RepeatWrapping:bi,ClampToEdgeWrapping:un,MirroredRepeatWrapping:ua},Ef={NearestFilter:et,NearestMipmapNearestFilter:Tu,NearestMipmapLinearFilter:ir,LinearFilter:vt,LinearMipmapNearestFilter:jr,LinearMipmapLinearFilter:$n},gh=new WeakMap;class ny extends dn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&he("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&he("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Zn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{if(gh.has(a)===!0)i&&i(gh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Zn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),gh.set(l,c),Zn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Zn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let To;class rd{static getContext(){return To===void 0&&(To=new(window.AudioContext||window.webkitAudioContext)),To}static setContext(e){To=e}}class iy extends dn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new Si(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{const c=l.slice(0);rd.getContext().decodeAudioData(c,function(u){t(u)}).catch(o)}catch(c){o(c)}},n,i);function o(l){i?i(l):Pe(l),r.manager.itemError(e)}}}const Tf=new ze,Af=new ze,Ji=new ze;class sy{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new kt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new kt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,Ji.copy(e.projectionMatrix);const i=t.eyeSep/2,r=i*t.near/t.focus,a=t.near*Math.tan(ps*t.fov*.5)/t.zoom;let o,l;Af.elements[12]=-i,Tf.elements[12]=i,o=-a*t.aspect+r,l=a*t.aspect+r,Ji.elements[0]=2*t.near/(l-o),Ji.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(Ji),o=-a*t.aspect-r,l=a*t.aspect-r,Ji.elements[0]=2*t.near/(l-o),Ji.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(Ji)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Af),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Tf)}}class vg extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ad{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Ki=new A,_h=new Wt,ry=new A,ji=new A,Qi=new A;class ay extends st{constructor(){super(),this.type="AudioListener",this.context=rd.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new ad}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Ki,_h,ry),ji.set(0,0,-1).applyQuaternion(_h),Qi.set(0,1,0).applyQuaternion(_h),t.positionX){const n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Ki.x,n),t.positionY.linearRampToValueAtTime(Ki.y,n),t.positionZ.linearRampToValueAtTime(Ki.z,n),t.forwardX.linearRampToValueAtTime(ji.x,n),t.forwardY.linearRampToValueAtTime(ji.y,n),t.forwardZ.linearRampToValueAtTime(ji.z,n),t.upX.linearRampToValueAtTime(Qi.x,n),t.upY.linearRampToValueAtTime(Qi.y,n),t.upZ.linearRampToValueAtTime(Qi.z,n)}else t.setPosition(Ki.x,Ki.y,Ki.z),t.setOrientation(ji.x,ji.y,ji.z,Qi.x,Qi.y,Qi.z)}}class bg extends st{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){he("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){he("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){he("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){he("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){he("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(he("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){he("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(he("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}}const es=new A,Cf=new Wt,oy=new A,ts=new A;class ly extends bg{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(es,Cf,oy),ts.set(0,0,1).applyQuaternion(Cf);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(es.x,n),t.positionY.linearRampToValueAtTime(es.y,n),t.positionZ.linearRampToValueAtTime(es.z,n),t.orientationX.linearRampToValueAtTime(ts.x,n),t.orientationY.linearRampToValueAtTime(ts.y,n),t.orientationZ.linearRampToValueAtTime(ts.z,n)}else t.setPosition(es.x,es.y,es.z),t.setOrientation(ts.x,ts.y,ts.z)}}class cy{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class Sg{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Wt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;Wt.multiplyQuaternionsFlat(e,a,e,t,e,n),Wt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const od="\\[\\]\\.:\\/",hy=new RegExp("["+od+"]","g"),ld="[^"+od+"]",uy="[^"+od.replace("\\.","")+"]",dy=/((?:WC+[\/:])*)/.source.replace("WC",ld),fy=/(WCOD+)?/.source.replace("WCOD",uy),py=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ld),my=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ld),gy=new RegExp("^"+dy+fy+py+my+"$"),_y=["material","materials","bones","map"];class xy{constructor(e,t,n){const i=n||it.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class it{constructor(e,t,n){this.path=t,this.parsedPath=n||it.parseTrackName(t),this.node=it.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new it.Composite(e,t,n):new it(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(hy,"")}static parseTrackName(e){const t=gy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);_y.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=it.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){he("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Pe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Pe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Pe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Pe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Pe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;Pe("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}it.Composite=xy;it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray];it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class yy{constructor(){this.isAnimationObjectGroup=!0,this.uuid=yn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,a=r.length;let o,l=e.length,c=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){const d=arguments[h],f=d.uuid;let p=t[f];if(p===void 0){p=l++,t[f]=p,e.push(d);for(let _=0,g=a;_!==g;++_)r[_].push(new it(d,n[_],i[_]))}else if(p<c){o=e[p];const _=--c,g=e[_];t[g.uuid]=p,e[p]=g,t[f]=_,e[_]=d;for(let m=0,x=a;m!==x;++m){const y=r[m],b=y[_];let w=y[p];y[p]=b,w===void 0&&(w=new it(d,n[m],i[m])),y[_]=w}}else e[p]!==o&&Pe("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a],c=l.uuid,h=t[c];if(h!==void 0&&h>=r){const u=r++,d=e[u];t[d.uuid]=h,e[h]=d,t[c]=u,e[u]=l;for(let f=0,p=i;f!==p;++f){const _=n[f],g=_[u],m=_[h];_[h]=g,_[u]=m}}}this.nCachedObjects_=r}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,a=e.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],h=c.uuid,u=t[h];if(u!==void 0)if(delete t[h],u<r){const d=--r,f=e[d],p=--a,_=e[p];t[f.uuid]=u,e[u]=f,t[_.uuid]=d,e[d]=_,e.pop();for(let g=0,m=i;g!==m;++g){const x=n[g],y=x[d],b=x[p];x[u]=y,x[d]=b,x.pop()}}else{const d=--a,f=e[d];d>0&&(t[f.uuid]=u),e[u]=f,e.pop();for(let p=0,_=i;p!==_;++p){const g=n[p];g[u]=g[d],g.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const r=this._bindings;if(i!==void 0)return r[i];const a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,u=new Array(c);i=r.length,n[e]=i,a.push(e),o.push(t),r.push(u);for(let d=h,f=l.length;d!==f;++d){const p=l[d];u[d]=new it(p,e,t)}return u}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=e[o];t[c]=n,a[n]=l,a.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}}class Mg{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:cs,endingEnd:cs};for(let c=0;c!==a;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=gm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Du:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case ic:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===_m;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===mm){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=hs,i.endingEnd=hs):(e?i.endingStart=this.zeroSlopeAtStart?hs:cs:i.endingStart=fa,t?i.endingEnd=this.zeroSlopeAtEnd?hs:cs:i.endingEnd=fa)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}const vy=new Float32Array(1);class by extends ti{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=i[u],f=d.name;let p=h[f];if(p!==void 0)++p.referenceCount,a[u]=p;else{if(p=a[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;p=new Sg(it.create(n,f,_),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),a[u]=p}o[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new ju(new Float32Array(2),new Float32Array(2),1,vy),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?Ma.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=ic),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new Mg(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Ma.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Sy extends Uu{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isRenderTarget3D=!0,this.depth=n,this.texture=new oc(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class cd{constructor(e){this.value=e}clone(){return new cd(this.value.clone===void 0?this.value:this.value.clone())}}let My=0;class wy extends ti{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:My++}),this.name="",this.usage=ma,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const r=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class Ey extends dc{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Ty{constructor(e,t,n,i,r,a=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.normalized=a,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const Rf=new ze;class wg{constructor(e,t,n=0,i=1/0){this.ray=new Ms(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new lc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Pe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Rf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Rf),this}intersectObject(e,t=!0,n=[]){return $h(e,this,n,t),n.sort(If),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)$h(e[i],this,n,t);return n.sort(If),n}}function If(s,e){return s.distance-e.distance}function $h(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)$h(r[a],e,t,!0)}}class Ay{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Cy.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Cy(){this._document.hidden===!1&&this.reset()}class Zh{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Be(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Be(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ry{constructor(e=1,t=0,n=0){this.radius=e,this.theta=t,this.y=n}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}class hd{constructor(e,t,n,i){hd.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}}const Pf=new Y;class Iy{constructor(e=new Y(1/0,1/0),t=new Y(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Pf.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pf).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Lf=new A,Ao=new A,Ys=new A,$s=new A,xh=new A,Py=new A,Ly=new A;class Dy{constructor(e=new A,t=new A){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Lf.subVectors(e,this.start),Ao.subVectors(this.end,this.start);const n=Ao.dot(Ao);let r=Ao.dot(Lf)/n;return t&&(r=Be(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(e,t=Py,n=Ly){const i=10000000000000001e-32;let r,a;const o=this.start,l=e.start,c=this.end,h=e.end;Ys.subVectors(c,o),$s.subVectors(h,l),xh.subVectors(o,l);const u=Ys.dot(Ys),d=$s.dot($s),f=$s.dot(xh);if(u<=i&&d<=i)return t.copy(o),n.copy(l),t.sub(n),t.dot(t);if(u<=i)r=0,a=f/d,a=Be(a,0,1);else{const p=Ys.dot(xh);if(d<=i)a=0,r=Be(-p/u,0,1);else{const _=Ys.dot($s),g=u*d-_*_;g!==0?r=Be((_*f-p*d)/g,0,1):r=0,a=(_*r+f)/d,a<0?(a=0,r=Be(-p/u,0,1)):a>1&&(a=1,r=Be((_-p)/u,0,1))}}return t.copy(o).add(Ys.multiplyScalar(r)),n.copy(l).add($s.multiplyScalar(a)),t.sub(n),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Df=new A;class Ny extends st{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new He,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){const c=a/l*Math.PI*2,h=o/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new we(i,3));const r=new tn({fog:!1,toneMapped:!1});this.cone=new ni(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Df.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Df),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Ri=new A,Co=new ze,yh=new ze;class Uy extends ni{constructor(e){const t=Eg(e),n=new He,i=[],r=[];for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new we(i,3)),n.setAttribute("color",new we(r,3));const a=new tn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,a),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;const o=new ve(255),l=new ve(65280);this.setColors(o,l)}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");yh.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){const o=t[r];o.parent&&o.parent.isBone&&(Co.multiplyMatrices(yh,o.matrixWorld),Ri.setFromMatrixPosition(Co),i.setXYZ(a,Ri.x,Ri.y,Ri.z),Co.multiplyMatrices(yh,o.parent.matrixWorld),Ri.setFromMatrixPosition(Co),i.setXYZ(a+1,Ri.x,Ri.y,Ri.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){const i=this.geometry.getAttribute("color");for(let r=0;r<i.count;r+=2)i.setXYZ(r,e.r,e.g,e.b),i.setXYZ(r+1,t.r,t.g,t.b);return i.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function Eg(s){const e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)e.push(...Eg(s.children[t]));return e}class Fy extends bt{constructor(e,t,n){const i=new Ua(t,4,2),r=new Bn({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const Oy=new A,Nf=new ve,Uf=new ve;class ky extends st{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new Na(t);i.rotateY(Math.PI*.5),this.material=new Bn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),a=new Float32Array(r.count*3);i.setAttribute("color",new tt(a,3)),this.add(new bt(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Nf.copy(this.light.color),Uf.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const r=n<i/2?Nf:Uf;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(Oy.setFromMatrixPosition(this.light.matrixWorld).negate())}}class By extends ni{constructor(e=10,t=10,n=4473924,i=8947848){n=new ve(n),i=new ve(i);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,f=0,p=-o;d<=t;d++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);const _=d===r?n:i;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const h=new He;h.setAttribute("position",new we(l,3)),h.setAttribute("color",new we(c,3));const u=new tn({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Gy extends ni{constructor(e=10,t=16,n=8,i=64,r=4473924,a=8947848){r=new ve(r),a=new ve(a);const o=[],l=[];if(t>1)for(let u=0;u<t;u++){const d=u/t*(Math.PI*2),f=Math.sin(d)*e,p=Math.cos(d)*e;o.push(0,0,0),o.push(f,0,p);const _=u&1?r:a;l.push(_.r,_.g,_.b),l.push(_.r,_.g,_.b)}for(let u=0;u<n;u++){const d=u&1?r:a,f=e-e/n*u;for(let p=0;p<i;p++){let _=p/i*(Math.PI*2),g=Math.sin(_)*f,m=Math.cos(_)*f;o.push(g,0,m),l.push(d.r,d.g,d.b),_=(p+1)/i*(Math.PI*2),g=Math.sin(_)*f,m=Math.cos(_)*f,o.push(g,0,m),l.push(d.r,d.g,d.b)}}const c=new He;c.setAttribute("position",new we(o,3)),c.setAttribute("color",new we(l,3));const h=new tn({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Ff=new A,Ro=new A,Of=new A;class zy extends st{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new He;i.setAttribute("position",new we([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new tn({fog:!1,toneMapped:!1});this.lightPlane=new ki(i,r),this.add(this.lightPlane),i=new He,i.setAttribute("position",new we([0,0,0,0,0,1],3)),this.targetLine=new ki(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Ff.setFromMatrixPosition(this.light.matrixWorld),Ro.setFromMatrixPosition(this.light.target.matrixWorld),Of.subVectors(Ro,Ff),this.lightPlane.lookAt(Ro),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Ro),this.targetLine.scale.z=Of.length()}}const Io=new A,Tt=new cc;class Vy extends ni{constructor(e){const t=new He,n=new tn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(p,_){l(p),l(_)}function l(p){i.push(0,0,0),r.push(0,0,0),a[p]===void 0&&(a[p]=[]),a[p].push(i.length/3-1)}t.setAttribute("position",new we(i,3)),t.setAttribute("color",new we(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const c=new ve(16755200),h=new ve(16711680),u=new ve(43775),d=new ve(16777215),f=new ve(3355443);this.setColors(c,h,u,d,f)}setColors(e,t,n,i,r){const o=this.geometry.getAttribute("color");return o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0,this}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;let r,a;if(Tt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,a=0;else if(this.camera.coordinateSystem===xn)r=-1,a=1;else if(this.camera.coordinateSystem===mr)r=0,a=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Ct("c",t,e,Tt,0,0,r),Ct("t",t,e,Tt,0,0,a),Ct("n1",t,e,Tt,-n,-i,r),Ct("n2",t,e,Tt,n,-i,r),Ct("n3",t,e,Tt,-n,i,r),Ct("n4",t,e,Tt,n,i,r),Ct("f1",t,e,Tt,-n,-i,a),Ct("f2",t,e,Tt,n,-i,a),Ct("f3",t,e,Tt,-n,i,a),Ct("f4",t,e,Tt,n,i,a),Ct("u1",t,e,Tt,n*.7,i*1.1,r),Ct("u2",t,e,Tt,-n*.7,i*1.1,r),Ct("u3",t,e,Tt,0,i*2,r),Ct("cf1",t,e,Tt,-n,0,a),Ct("cf2",t,e,Tt,n,0,a),Ct("cf3",t,e,Tt,0,-i,a),Ct("cf4",t,e,Tt,0,i,a),Ct("cn1",t,e,Tt,-n,0,r),Ct("cn2",t,e,Tt,n,0,r),Ct("cn3",t,e,Tt,0,-i,r),Ct("cn4",t,e,Tt,0,i,r),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Ct(s,e,t,n,i,r,a){Io.set(i,r,a).unproject(n);const o=e[s];if(o!==void 0){const l=t.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],Io.x,Io.y,Io.z)}}const Po=new Bt;class Hy extends ni{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new He;r.setIndex(new tt(n,1)),r.setAttribute("position",new tt(i,3)),super(r,new tn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Po.setFromObject(this.object),Po.isEmpty())return;const e=Po.min,t=Po.max,n=this.geometry.attributes.position,i=n.array;i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=e.x,i[4]=t.y,i[5]=t.z,i[6]=e.x,i[7]=e.y,i[8]=t.z,i[9]=t.x,i[10]=e.y,i[11]=t.z,i[12]=t.x,i[13]=t.y,i[14]=e.z,i[15]=e.x,i[16]=t.y,i[17]=e.z,i[18]=e.x,i[19]=e.y,i[20]=e.z,i[21]=t.x,i[22]=e.y,i[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Wy extends ni{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new He;r.setIndex(new tt(n,1)),r.setAttribute("position",new we(i,3)),super(r,new tn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class Xy extends ki{constructor(e,t=1,n=16776960){const i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new He;a.setAttribute("position",new we(r,3)),a.computeBoundingSphere(),super(a,new tn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new He;l.setAttribute("position",new we(o,3)),l.computeBoundingSphere(),this.add(new bt(l,new Bn({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const kf=new A;let Lo,vh;class qy extends st{constructor(e=new A(0,0,1),t=new A(0,0,0),n=1,i=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",Lo===void 0&&(Lo=new He,Lo.setAttribute("position",new we([0,0,0,0,1,0],3)),vh=new Da(.5,1,5,1),vh.translate(0,-.5,0)),this.position.copy(t),this.line=new ki(Lo,new tn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new bt(vh,new Bn({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{kf.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(kf,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Yy extends ni{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new He;i.setAttribute("position",new we(t,3)),i.setAttribute("color",new we(n,3));const r=new tn({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new ve,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class $y{constructor(){this.type="ShapePath",this.color=new ve,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Wl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,a){return this.currentPath.bezierCurveTo(e,t,n,i,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(m){const x=[];for(let y=0,b=m.length;y<b;y++){const w=m[y],T=new ms;T.curves=w.curves,x.push(T)}return x}function n(m,x){const y=x.length;let b=!1;for(let w=y-1,T=0;T<y;w=T++){let R=x[w],P=x[T],S=P.x-R.x,M=P.y-R.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(R=x[T],S=-S,P=x[w],M=-M),m.y<R.y||m.y>P.y)continue;if(m.y===R.y){if(m.x===R.x)return!0}else{const L=M*(m.x-R.x)-S*(m.y-R.y);if(L===0)return!0;if(L<0)continue;b=!b}}else{if(m.y!==R.y)continue;if(P.x<=m.x&&m.x<=R.x||R.x<=m.x&&m.x<=P.x)return!0}}return b}const i=Fn.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,l;const c=[];if(r.length===1)return o=r[0],l=new ms,l.curves=o.curves,c.push(l),c;let h=!i(r[0].getPoints());h=e?!h:h;const u=[],d=[];let f=[],p=0,_;d[p]=void 0,f[p]=[];for(let m=0,x=r.length;m<x;m++)o=r[m],_=o.getPoints(),a=i(_),a=e?!a:a,a?(!h&&d[p]&&p++,d[p]={s:new ms,p:_},d[p].s.curves=o.curves,h&&p++,f[p]=[]):f[p].push({h:o,p:_[0]});if(!d[0])return t(r);if(d.length>1){let m=!1,x=0;for(let y=0,b=d.length;y<b;y++)u[y]=[];for(let y=0,b=d.length;y<b;y++){const w=f[y];for(let T=0;T<w.length;T++){const R=w[T];let P=!0;for(let S=0;S<d.length;S++)n(R.p,d[S].p)&&(y!==S&&x++,P?(P=!1,u[S].push(R)):m=!0);P&&u[y].push(R)}}x>0&&m===!1&&(f=u)}let g;for(let m=0,x=d.length;m<x;m++){l=d[m].s,c.push(l),g=f[m];for(let y=0,b=g.length;y<b;y++)l.holes.push(g[y].h)}return c}}class Tg extends ti{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){he("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Zy(s,e){const t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function Jy(s,e){const t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function Ky(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function Jh(s,e,t,n){const i=jy(n);switch(t){case Pu:return s*e;case ec:return s*e/i.components*i.byteLength;case Aa:return s*e/i.components*i.byteLength;case xs:return s*e*2/i.components*i.byteLength;case tc:return s*e*2/i.components*i.byteLength;case Lu:return s*e*3/i.components*i.byteLength;case jt:return s*e*4/i.components*i.byteLength;case nc:return s*e*4/i.components*i.byteLength;case Qr:case ea:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ta:case na:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case cl:case ul:return Math.max(s,16)*Math.max(e,8)/4;case ll:case hl:return Math.max(s,8)*Math.max(e,8)/2;case dl:case fl:case ml:case gl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case pl:case _l:case xl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case yl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case vl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case bl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case wl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case El:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Tl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Al:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Rl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Il:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Pl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ll:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Dl:case Nl:case Ul:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Fl:case Ol:return Math.ceil(s/4)*Math.ceil(e/4)*8;case kl:case Bl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jy(s){switch(s){case cn:case Au:return{byteLength:1,components:1};case fr:case Cu:case Qn:return{byteLength:2,components:1};case jl:case Ql:return{byteLength:2,components:4};case Tn:case Kl:case Kt:return{byteLength:4,components:1};case Ru:case Iu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}class Qy{static contain(e,t){return Zy(e,t)}static cover(e,t){return Jy(e,t)}static fill(e){return Ky(e)}static getByteLength(e,t,n,i){return Jh(e,t,n,i)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$l}}));typeof window<"u"&&(window.__THREE__?he("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$l);function Ag(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function ev(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){const p=u[d],_=u[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){const _=u[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var tv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,iv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,av=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ov=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,hv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_v=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,wv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ev=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Tv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Av=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Iv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Nv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Uv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ov=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Yv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$v=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Qv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,eb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ib=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ab=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ob=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ub=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,db=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_b=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Eb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ab=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ib=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Db=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ub=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ob=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Bb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$b=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,hS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_S=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,SS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ES=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,RS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,LS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:tv,alphahash_pars_fragment:nv,alphamap_fragment:iv,alphamap_pars_fragment:sv,alphatest_fragment:rv,alphatest_pars_fragment:av,aomap_fragment:ov,aomap_pars_fragment:lv,batching_pars_vertex:cv,batching_vertex:hv,begin_vertex:uv,beginnormal_vertex:dv,bsdfs:fv,iridescence_fragment:pv,bumpmap_pars_fragment:mv,clipping_planes_fragment:gv,clipping_planes_pars_fragment:_v,clipping_planes_pars_vertex:xv,clipping_planes_vertex:yv,color_fragment:vv,color_pars_fragment:bv,color_pars_vertex:Sv,color_vertex:Mv,common:wv,cube_uv_reflection_fragment:Ev,defaultnormal_vertex:Tv,displacementmap_pars_vertex:Av,displacementmap_vertex:Cv,emissivemap_fragment:Rv,emissivemap_pars_fragment:Iv,colorspace_fragment:Pv,colorspace_pars_fragment:Lv,envmap_fragment:Dv,envmap_common_pars_fragment:Nv,envmap_pars_fragment:Uv,envmap_pars_vertex:Fv,envmap_physical_pars_fragment:Yv,envmap_vertex:Ov,fog_vertex:kv,fog_pars_vertex:Bv,fog_fragment:Gv,fog_pars_fragment:zv,gradientmap_pars_fragment:Vv,lightmap_pars_fragment:Hv,lights_lambert_fragment:Wv,lights_lambert_pars_fragment:Xv,lights_pars_begin:qv,lights_toon_fragment:$v,lights_toon_pars_fragment:Zv,lights_phong_fragment:Jv,lights_phong_pars_fragment:Kv,lights_physical_fragment:jv,lights_physical_pars_fragment:Qv,lights_fragment_begin:eb,lights_fragment_maps:tb,lights_fragment_end:nb,logdepthbuf_fragment:ib,logdepthbuf_pars_fragment:sb,logdepthbuf_pars_vertex:rb,logdepthbuf_vertex:ab,map_fragment:ob,map_pars_fragment:lb,map_particle_fragment:cb,map_particle_pars_fragment:hb,metalnessmap_fragment:ub,metalnessmap_pars_fragment:db,morphinstance_vertex:fb,morphcolor_vertex:pb,morphnormal_vertex:mb,morphtarget_pars_vertex:gb,morphtarget_vertex:_b,normal_fragment_begin:xb,normal_fragment_maps:yb,normal_pars_fragment:vb,normal_pars_vertex:bb,normal_vertex:Sb,normalmap_pars_fragment:Mb,clearcoat_normal_fragment_begin:wb,clearcoat_normal_fragment_maps:Eb,clearcoat_pars_fragment:Tb,iridescence_pars_fragment:Ab,opaque_fragment:Cb,packing:Rb,premultiplied_alpha_fragment:Ib,project_vertex:Pb,dithering_fragment:Lb,dithering_pars_fragment:Db,roughnessmap_fragment:Nb,roughnessmap_pars_fragment:Ub,shadowmap_pars_fragment:Fb,shadowmap_pars_vertex:Ob,shadowmap_vertex:kb,shadowmask_pars_fragment:Bb,skinbase_vertex:Gb,skinning_pars_vertex:zb,skinning_vertex:Vb,skinnormal_vertex:Hb,specularmap_fragment:Wb,specularmap_pars_fragment:Xb,tonemapping_fragment:qb,tonemapping_pars_fragment:Yb,transmission_fragment:$b,transmission_pars_fragment:Zb,uv_pars_fragment:Jb,uv_pars_vertex:Kb,uv_vertex:jb,worldpos_vertex:Qb,background_vert:eS,background_frag:tS,backgroundCube_vert:nS,backgroundCube_frag:iS,cube_vert:sS,cube_frag:rS,depth_vert:aS,depth_frag:oS,distance_vert:lS,distance_frag:cS,equirect_vert:hS,equirect_frag:uS,linedashed_vert:dS,linedashed_frag:fS,meshbasic_vert:pS,meshbasic_frag:mS,meshlambert_vert:gS,meshlambert_frag:_S,meshmatcap_vert:xS,meshmatcap_frag:yS,meshnormal_vert:vS,meshnormal_frag:bS,meshphong_vert:SS,meshphong_frag:MS,meshphysical_vert:wS,meshphysical_frag:ES,meshtoon_vert:TS,meshtoon_frag:AS,points_vert:CS,points_frag:RS,shadow_vert:IS,shadow_frag:PS,sprite_vert:LS,sprite_frag:DS},pe={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Y(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new Y(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Ln={basic:{uniforms:$t([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:$t([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ve(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:$t([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:$t([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:$t([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new ve(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:$t([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:$t([pe.points,pe.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:$t([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:$t([pe.common,pe.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:$t([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:$t([pe.sprite,pe.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:$t([pe.common,pe.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:$t([pe.lights,pe.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Ln.physical={uniforms:$t([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Y(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Y},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Y},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Do={r:0,b:0,g:0},ns=new bn,NS=new ze;function US(s,e,t,n,i,r,a){const o=new ve(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function p(y){let b=y.isScene===!0?y.background:null;return b&&b.isTexture&&(b=(y.backgroundBlurriness>0?t:e).get(b)),b}function _(y){let b=!1;const w=p(y);w===null?m(o,l):w&&w.isColor&&(m(w,1),b=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(y,b){const w=p(b);w&&(w.isCubeTexture||w.mapping===Sr)?(h===void 0&&(h=new bt(new ws(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:xr(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ns.copy(b.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(NS.makeRotationFromEuler(ns)),h.material.toneMapped=je.getTransfer(w.colorSpace)!==ot,(u!==w||d!==w.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,f=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new bt(new ii(2,2),new An({name:"BackgroundMaterial",uniforms:xr(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=je.getTransfer(w.colorSpace)!==ot,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=w,d=w.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,b){y.getRGB(Do,Lm(s)),n.buffers.color.setClear(Do.r,Do.g,Do.b,b,a)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),l=b,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(o,l)},render:_,addToRenderList:g,dispose:x}}function FS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(M,L,F,k,q){let V=!1;const H=u(k,F,L);r!==H&&(r=H,c(r.object)),V=f(M,k,F,q),V&&p(M,k,F,q),q!==null&&e.update(q,s.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,b(M,L,F,k),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,L,F){const k=F.wireframe===!0;let q=n[M.id];q===void 0&&(q={},n[M.id]=q);let V=q[L.id];V===void 0&&(V={},q[L.id]=V);let H=V[k];return H===void 0&&(H=d(l()),V[k]=H),H}function d(M){const L=[],F=[],k=[];for(let q=0;q<t;q++)L[q]=0,F[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:k,object:M,attributes:{},index:null}}function f(M,L,F,k){const q=r.attributes,V=L.attributes;let H=0;const B=F.getAttributes();for(const Q in B)if(B[Q].location>=0){const oe=q[Q];let ue=V[Q];if(ue===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor)),oe===void 0||oe.attribute!==ue||ue&&oe.data!==ue.data)return!0;H++}return r.attributesNum!==H||r.index!==k}function p(M,L,F,k){const q={},V=L.attributes;let H=0;const B=F.getAttributes();for(const Q in B)if(B[Q].location>=0){let oe=V[Q];oe===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor));const ue={};ue.attribute=oe,oe&&oe.data&&(ue.data=oe.data),q[Q]=ue,H++}r.attributes=q,r.attributesNum=H,r.index=k}function _(){const M=r.newAttributes;for(let L=0,F=M.length;L<F;L++)M[L]=0}function g(M){m(M,0)}function m(M,L){const F=r.newAttributes,k=r.enabledAttributes,q=r.attributeDivisors;F[M]=1,k[M]===0&&(s.enableVertexAttribArray(M),k[M]=1),q[M]!==L&&(s.vertexAttribDivisor(M,L),q[M]=L)}function x(){const M=r.newAttributes,L=r.enabledAttributes;for(let F=0,k=L.length;F<k;F++)L[F]!==M[F]&&(s.disableVertexAttribArray(F),L[F]=0)}function y(M,L,F,k,q,V,H){H===!0?s.vertexAttribIPointer(M,L,F,q,V):s.vertexAttribPointer(M,L,F,k,q,V)}function b(M,L,F,k){_();const q=k.attributes,V=F.getAttributes(),H=L.defaultAttributeValues;for(const B in V){const Q=V[B];if(Q.location>=0){let me=q[B];if(me===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(me=M.instanceColor)),me!==void 0){const oe=me.normalized,ue=me.itemSize,Xe=e.get(me);if(Xe===void 0)continue;const Ve=Xe.buffer,ut=Xe.type,dt=Xe.bytesPerElement,$=ut===s.INT||ut===s.UNSIGNED_INT||me.gpuType===Kl;if(me.isInterleavedBufferAttribute){const ee=me.data,Se=ee.stride,Fe=me.offset;if(ee.isInstancedInterleavedBuffer){for(let Ee=0;Ee<Q.locationSize;Ee++)m(Q.location+Ee,ee.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ee=0;Ee<Q.locationSize;Ee++)g(Q.location+Ee);s.bindBuffer(s.ARRAY_BUFFER,Ve);for(let Ee=0;Ee<Q.locationSize;Ee++)y(Q.location+Ee,ue/Q.locationSize,ut,oe,Se*dt,(Fe+ue/Q.locationSize*Ee)*dt,$)}else{if(me.isInstancedBufferAttribute){for(let ee=0;ee<Q.locationSize;ee++)m(Q.location+ee,me.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let ee=0;ee<Q.locationSize;ee++)g(Q.location+ee);s.bindBuffer(s.ARRAY_BUFFER,Ve);for(let ee=0;ee<Q.locationSize;ee++)y(Q.location+ee,ue/Q.locationSize,ut,oe,ue*dt,ue/Q.locationSize*ee*dt,$)}}else if(H!==void 0){const oe=H[B];if(oe!==void 0)switch(oe.length){case 2:s.vertexAttrib2fv(Q.location,oe);break;case 3:s.vertexAttrib3fv(Q.location,oe);break;case 4:s.vertexAttrib4fv(Q.location,oe);break;default:s.vertexAttrib1fv(Q.location,oe)}}}}x()}function w(){P();for(const M in n){const L=n[M];for(const F in L){const k=L[F];for(const q in k)h(k[q].object),delete k[q];delete L[F]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const F in L){const k=L[F];for(const q in k)h(k[q].object),delete k[q];delete L[F]}delete n[M.id]}function R(M){for(const L in n){const F=n[L];if(F[M.id]===void 0)continue;const k=F[M.id];for(const q in k)h(k[q].object),delete k[q];delete F[M.id]}}function P(){S(),a=!0,r!==i&&(r=i,c(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:g,disableUnusedAttributes:x}}function OS(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)a(c[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_]*d[_];t.update(p,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function kS(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==jt&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const P=R===Qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==cn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Kt&&!P)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(he("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:b,maxSamples:w,samples:T}}function BS(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new ui,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const p=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,m=s.get(u);if(!i||p===null||p.length===0||r&&!g)r?h(null):c();else{const x=r?0:n,y=x*4;let b=m.clippingState||null;l.value=b,b=h(p,d,y,f);for(let w=0;w!==y;++w)b[w]=t[w];m.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=l.value,p!==!0||g===null){const m=f+_*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,b=f;y!==_;++y,b+=4)a.copy(u[y]).applyMatrix4(x,o),a.normal.toArray(g,b),g[b+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function GS(s){let e=new WeakMap;function t(a,o){return o===ca?a.mapping=jn:o===ha&&(a.mapping=Fi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ca||o===ha)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ku(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Ui=4,Bf=[.125,.215,.35,.446,.526,.582],os=20,zS=256,Br=new Er,Gf=new ve;let bh=null,Sh=0,Mh=0,wh=!1;const VS=new A;class Kh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=VS}=r;bh=this._renderer.getRenderTarget(),Sh=this._renderer.getActiveCubeFace(),Mh=this._renderer.getActiveMipmapLevel(),wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(bh,Sh,Mh),this._renderer.xr.enabled=wh,e.scissorTest=!1,Zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===jn||e.mapping===Fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bh=this._renderer.getRenderTarget(),Sh=this._renderer.getActiveCubeFace(),Mh=this._renderer.getActiveMipmapLevel(),wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:vt,minFilter:vt,generateMipmaps:!1,type:Qn,format:jt,colorSpace:ys,depthBuffer:!1},i=zf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zf(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=HS(r)),this._blurMaterial=XS(r,e,t),this._ggxMaterial=WS(r,e,t)}return i}_compileMaterial(e){const t=new bt(new He,e);this._renderer.compile(t,Br)}_sceneToCubeUV(e,t,n,i,r){const l=new kt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Gf),u.toneMapping=On,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bt(new ws,new Bn({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let m=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,m=!0):(g.color.copy(Gf),m=!0);for(let y=0;y<6;y++){const b=y%3;b===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):b===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));const w=this._cubeSize;Zs(i,b*w,y>2?w:0,w,w),u.setRenderTarget(i),m&&u.render(_,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===jn||e.mapping===Fi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vf());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Zs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Br)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,f=u*d,{_lodMax:p}=this,_=this._sizeLods[n],g=3*_*(n>p-Ui?n-p+Ui:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,Zs(r,g,m,3*_,2*_),i.setRenderTarget(r),i.render(o,Br),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Zs(e,g,m,3*_,2*_),i.setRenderTarget(e),i.render(o,Br)}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Pe("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=c;const d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*os-1),_=r/p,g=isFinite(r)?1+Math.floor(h*_):os;g>os&&he(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${os}`);const m=[];let x=0;for(let R=0;R<os;++R){const P=R/_,S=Math.exp(-P*P/2);m.push(S),R===0?x+=S:R<g&&(x+=2*S)}for(let R=0;R<m.length;R++)m[R]=m[R]/x;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=p,d.mipInt.value=y-n;const b=this._sizeLods[i],w=3*b*(i>y-Ui?i-y+Ui:0),T=4*(this._cubeSize-b);Zs(t,w,T,3*b,2*b),l.setRenderTarget(t),l.render(u,Br)}}function HS(s){const e=[],t=[],n=[];let i=s;const r=s-Ui+1+Bf.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-Ui?l=Bf[a-s+Ui-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,_=3,g=2,m=1,x=new Float32Array(_*p*f),y=new Float32Array(g*p*f),b=new Float32Array(m*p*f);for(let T=0;T<f;T++){const R=T%3*2/3-1,P=T>2?0:-1,S=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];x.set(S,_*p*T),y.set(d,g*p*T);const M=[T,T,T,T,T,T];b.set(M,m*p*T)}const w=new He;w.setAttribute("position",new tt(x,_)),w.setAttribute("uv",new tt(y,g)),w.setAttribute("faceIndex",new tt(b,m)),n.push(new bt(w,null)),i>Ui&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function zf(s,e,t){const n=new vn(s,e,t);return n.texture.mapping=Sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zs(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function WS(s,e,t){return new An({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:zS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function XS(s,e,t){const n=new Float32Array(os),i=new A(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Vf(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Hf(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Pc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qS(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ca||l===ha,h=l===jn||l===Fi;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Kh(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Kh(s)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function YS(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&gr("WebGLRenderer: "+n+" extension not supported."),i}}}function $S(s,e,t,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],s.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,p=u.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let y=0,b=x.length;y<b;y+=3){const w=x[y+0],T=x[y+1],R=x[y+2];d.push(w,T,T,R,R,w)}}else if(p!==void 0){const x=p.array;_=p.version;for(let y=0,b=x.length/3-1;y<b;y+=3){const w=y+0,T=y+1,R=y+2;d.push(w,T,T,R,R,w)}}else return;const g=new(Tm(d)?Ou:Fu)(d,1);g.version=_;const m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function ZS(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,p){p!==0&&(s.drawElementsInstanced(n,f,r,d*a,p),t.update(f,n,p))}function h(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];t.update(g,n,1)}function u(d,f,p,_){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/a,f[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,p);let m=0;for(let x=0;x<p;x++)m+=f[x]*_[x];t.update(m,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function JS(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Pe("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function KS(s,e,t){const n=new WeakMap,i=new _t;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let M=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let b=0;p===!0&&(b=1),_===!0&&(b=2),g===!0&&(b=3);let w=o.attributes.position.count*b,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const R=new Float32Array(w*T*4*u),P=new ac(R,w,T,u);P.type=Kt,P.needsUpdate=!0;const S=b*4;for(let L=0;L<u;L++){const F=m[L],k=x[L],q=y[L],V=w*T*4*L;for(let H=0;H<F.count;H++){const B=H*S;p===!0&&(i.fromBufferAttribute(F,H),R[V+B+0]=i.x,R[V+B+1]=i.y,R[V+B+2]=i.z,R[V+B+3]=0),_===!0&&(i.fromBufferAttribute(k,H),R[V+B+4]=i.x,R[V+B+5]=i.y,R[V+B+6]=i.z,R[V+B+7]=0),g===!0&&(i.fromBufferAttribute(q,H),R[V+B+8]=i.x,R[V+B+9]=i.y,R[V+B+10]=i.z,R[V+B+11]=q.itemSize===4?i.w:1)}}d={count:u,texture:P,size:new Y(w,T)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function jS(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const QS={[vu]:"LINEAR_TONE_MAPPING",[bu]:"REINHARD_TONE_MAPPING",[Su]:"CINEON_TONE_MAPPING",[Zl]:"ACES_FILMIC_TONE_MAPPING",[wu]:"AGX_TONE_MAPPING",[Eu]:"NEUTRAL_TONE_MAPPING",[Mu]:"CUSTOM_TONE_MAPPING"};function eM(s,e,t,n,i){const r=new vn(e,t,{type:s,depthBuffer:n,stencilBuffer:i}),a=new vn(e,t,{type:Qn,depthBuffer:!1,stencilBuffer:!1}),o=new He;o.setAttribute("position",new we([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new we([0,2,0,0,2,0],2));const l=new $u({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new bt(o,l),h=new Er(-1,1,1,-1,0,1);let u=null,d=null,f=!1,p,_=null,g=[],m=!1;this.setSize=function(x,y){r.setSize(x,y),a.setSize(x,y);for(let b=0;b<g.length;b++){const w=g[b];w.setSize&&w.setSize(x,y)}},this.setEffects=function(x){g=x,m=g.length>0&&g[0].isRenderPass===!0;const y=r.width,b=r.height;for(let w=0;w<g.length;w++){const T=g[w];T.setSize&&T.setSize(y,b)}},this.begin=function(x,y){if(f||x.toneMapping===On&&g.length===0)return!1;if(_=y,y!==null){const b=y.width,w=y.height;(r.width!==b||r.height!==w)&&this.setSize(b,w)}return m===!1&&x.setRenderTarget(r),p=x.toneMapping,x.toneMapping=On,!0},this.hasRenderPass=function(){return m},this.end=function(x,y){x.toneMapping=p,f=!0;let b=r,w=a;for(let T=0;T<g.length;T++){const R=g[T];if(R.enabled!==!1&&(R.render(x,w,b,y),R.needsSwap!==!1)){const P=b;b=w,w=P}}if(u!==x.outputColorSpace||d!==x.toneMapping){u=x.outputColorSpace,d=x.toneMapping,l.defines={},je.getTransfer(u)===ot&&(l.defines.SRGB_TRANSFER="");const T=QS[d];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,x.setRenderTarget(_),x.render(c,h),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Cg=new At,jh=new vr(1,1),Rg=new ac,Ig=new oc,Pg=new Ca,Wf=[],Xf=[],qf=new Float32Array(16),Yf=new Float32Array(9),$f=new Float32Array(4);function Tr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Wf[i];if(r===void 0&&(r=new Float32Array(i),Wf[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Lt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Dt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Lc(s,e){let t=Xf[e];t===void 0&&(t=new Int32Array(e),Xf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function tM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function nM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;s.uniform2fv(this.addr,e),Dt(t,e)}}function iM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;s.uniform3fv(this.addr,e),Dt(t,e)}}function sM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;s.uniform4fv(this.addr,e),Dt(t,e)}}function rM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;$f.set(n),s.uniformMatrix2fv(this.addr,!1,$f),Dt(t,n)}}function aM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;Yf.set(n),s.uniformMatrix3fv(this.addr,!1,Yf),Dt(t,n)}}function oM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;qf.set(n),s.uniformMatrix4fv(this.addr,!1,qf),Dt(t,n)}}function lM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function cM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;s.uniform2iv(this.addr,e),Dt(t,e)}}function hM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;s.uniform3iv(this.addr,e),Dt(t,e)}}function uM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;s.uniform4iv(this.addr,e),Dt(t,e)}}function dM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function fM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;s.uniform2uiv(this.addr,e),Dt(t,e)}}function pM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;s.uniform3uiv(this.addr,e),Dt(t,e)}}function mM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;s.uniform4uiv(this.addr,e),Dt(t,e)}}function gM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(jh.compareFunction=t.isReversedDepthBuffer()?rc:sc,r=jh):r=Cg,t.setTexture2D(e||r,i)}function _M(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ig,i)}function xM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Pg,i)}function yM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Rg,i)}function vM(s){switch(s){case 5126:return tM;case 35664:return nM;case 35665:return iM;case 35666:return sM;case 35674:return rM;case 35675:return aM;case 35676:return oM;case 5124:case 35670:return lM;case 35667:case 35671:return cM;case 35668:case 35672:return hM;case 35669:case 35673:return uM;case 5125:return dM;case 36294:return fM;case 36295:return pM;case 36296:return mM;case 35678:case 36198:case 36298:case 36306:case 35682:return gM;case 35679:case 36299:case 36307:return _M;case 35680:case 36300:case 36308:case 36293:return xM;case 36289:case 36303:case 36311:case 36292:return yM}}function bM(s,e){s.uniform1fv(this.addr,e)}function SM(s,e){const t=Tr(e,this.size,2);s.uniform2fv(this.addr,t)}function MM(s,e){const t=Tr(e,this.size,3);s.uniform3fv(this.addr,t)}function wM(s,e){const t=Tr(e,this.size,4);s.uniform4fv(this.addr,t)}function EM(s,e){const t=Tr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function TM(s,e){const t=Tr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function AM(s,e){const t=Tr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function CM(s,e){s.uniform1iv(this.addr,e)}function RM(s,e){s.uniform2iv(this.addr,e)}function IM(s,e){s.uniform3iv(this.addr,e)}function PM(s,e){s.uniform4iv(this.addr,e)}function LM(s,e){s.uniform1uiv(this.addr,e)}function DM(s,e){s.uniform2uiv(this.addr,e)}function NM(s,e){s.uniform3uiv(this.addr,e)}function UM(s,e){s.uniform4uiv(this.addr,e)}function FM(s,e,t){const n=this.cache,i=e.length,r=Lc(t,i);Lt(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=jh:a=Cg;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function OM(s,e,t){const n=this.cache,i=e.length,r=Lc(t,i);Lt(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Ig,r[a])}function kM(s,e,t){const n=this.cache,i=e.length,r=Lc(t,i);Lt(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Pg,r[a])}function BM(s,e,t){const n=this.cache,i=e.length,r=Lc(t,i);Lt(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Rg,r[a])}function GM(s){switch(s){case 5126:return bM;case 35664:return SM;case 35665:return MM;case 35666:return wM;case 35674:return EM;case 35675:return TM;case 35676:return AM;case 5124:case 35670:return CM;case 35667:case 35671:return RM;case 35668:case 35672:return IM;case 35669:case 35673:return PM;case 5125:return LM;case 36294:return DM;case 36295:return NM;case 36296:return UM;case 35678:case 36198:case 36298:case 36306:case 35682:return FM;case 35679:case 36299:case 36307:return OM;case 35680:case 36300:case 36308:case 36293:return kM;case 36289:case 36303:case 36311:case 36292:return BM}}class zM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=vM(t.type)}}class VM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=GM(t.type)}}class HM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Eh=/(\w+)(\])?(\[|\.)?/g;function Zf(s,e){s.seq.push(e),s.map[e.id]=e}function WM(s,e,t){const n=s.name,i=n.length;for(Eh.lastIndex=0;;){const r=Eh.exec(n),a=Eh.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Zf(t,c===void 0?new zM(o,s,e):new VM(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new HM(o),Zf(t,u)),t=u}}}class Ho{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);WM(o,l,this)}const i=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Jf(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const XM=37297;let qM=0;function YM(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Kf=new Ye;function $M(s){je._getMatrix(Kf,je.workingColorSpace,s);const e=`mat3( ${Kf.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(s)){case pa:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return he("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function jf(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+YM(s.getShaderSource(e),o)}else return r}function ZM(s,e){const t=$M(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const JM={[vu]:"Linear",[bu]:"Reinhard",[Su]:"Cineon",[Zl]:"ACESFilmic",[wu]:"AgX",[Eu]:"Neutral",[Mu]:"Custom"};function KM(s,e){const t=JM[e];return t===void 0?(he("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const No=new A;function jM(){je.getLuminanceCoefficients(No);const s=No.x.toFixed(4),e=No.y.toFixed(4),t=No.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function ew(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function tw(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Yr(s){return s!==""}function Qf(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ep(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qh(s){return s.replace(nw,sw)}const iw=new Map;function sw(s,e){let t=Ze[e];if(t===void 0){const n=iw.get(e);if(n!==void 0)t=Ze[n],he('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Qh(t)}const rw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tp(s){return s.replace(rw,aw)}function aw(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function np(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ow={[Kr]:"SHADOWMAP_TYPE_PCF",[nr]:"SHADOWMAP_TYPE_VSM"};function lw(s){return ow[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const cw={[jn]:"ENVMAP_TYPE_CUBE",[Fi]:"ENVMAP_TYPE_CUBE",[Sr]:"ENVMAP_TYPE_CUBE_UV"};function hw(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":cw[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const uw={[Fi]:"ENVMAP_MODE_REFRACTION"};function dw(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":uw[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const fw={[Ta]:"ENVMAP_BLENDING_MULTIPLY",[dm]:"ENVMAP_BLENDING_MIX",[fm]:"ENVMAP_BLENDING_ADD"};function pw(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":fw[s.combine]||"ENVMAP_BLENDING_NONE"}function mw(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function gw(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=lw(t),c=hw(t),h=dw(t),u=pw(t),d=mw(t),f=QM(t),p=ew(r),_=i.createProgram();let g,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Yr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Yr).join(`
`),m.length>0&&(m+=`
`)):(g=[np(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),m=[np(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?Ze.tonemapping_pars_fragment:"",t.toneMapping!==On?KM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,ZM("linearToOutputTexel",t.outputColorSpace),jM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yr).join(`
`)),a=Qh(a),a=Qf(a,t),a=ep(a,t),o=Qh(o),o=Qf(o,t),o=ep(o,t),a=tp(a),o=tp(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=x+g+a,b=x+m+o,w=Jf(i,i.VERTEX_SHADER,y),T=Jf(i,i.FRAGMENT_SHADER,b);i.attachShader(_,w),i.attachShader(_,T),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function R(L){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(_)||"",k=i.getShaderInfoLog(w)||"",q=i.getShaderInfoLog(T)||"",V=F.trim(),H=k.trim(),B=q.trim();let Q=!0,me=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,w,T);else{const oe=jf(i,w,"vertex"),ue=jf(i,T,"fragment");Pe("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+oe+`
`+ue)}else V!==""?he("WebGLProgram: Program Info Log:",V):(H===""||B==="")&&(me=!1);me&&(L.diagnostics={runnable:Q,programLog:V,vertexShader:{log:H,prefix:g},fragmentShader:{log:B,prefix:m}})}i.deleteShader(w),i.deleteShader(T),P=new Ho(i,_),S=tw(i,_)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,XM)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=T,this}let _w=0;class xw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new yw(e),t.set(e,n)),n}}class yw{constructor(e){this.id=_w++,this.code=e,this.usedTimes=0}}function vw(s,e,t,n,i,r,a){const o=new lc,l=new xw,c=new Set,h=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,M,L,F,k){const q=F.fog,V=k.geometry,H=S.isMeshStandardMaterial?F.environment:null,B=(S.isMeshStandardMaterial?t:e).get(S.envMap||H),Q=B&&B.mapping===Sr?B.image.height:null,me=p[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&he("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const oe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ue=oe!==void 0?oe.length:0;let Xe=0;V.morphAttributes.position!==void 0&&(Xe=1),V.morphAttributes.normal!==void 0&&(Xe=2),V.morphAttributes.color!==void 0&&(Xe=3);let Ve,ut,dt,$;if(me){const lt=Ln[me];Ve=lt.vertexShader,ut=lt.fragmentShader}else Ve=S.vertexShader,ut=S.fragmentShader,l.update(S),dt=l.getVertexShaderID(S),$=l.getFragmentShaderID(S);const ee=s.getRenderTarget(),Se=s.state.buffers.depth.getReversed(),Fe=k.isInstancedMesh===!0,Ee=k.isBatchedMesh===!0,Qe=!!S.map,ft=!!S.matcap,qe=!!B,K=!!S.aoMap,ne=!!S.lightMap,j=!!S.bumpMap,ge=!!S.normalMap,I=!!S.displacementMap,De=!!S.emissiveMap,ye=!!S.metalnessMap,Oe=!!S.roughnessMap,re=S.anisotropy>0,C=S.clearcoat>0,v=S.dispersion>0,N=S.iridescence>0,W=S.sheen>0,Z=S.transmission>0,X=re&&!!S.anisotropyMap,Re=C&&!!S.clearcoatMap,ae=C&&!!S.clearcoatNormalMap,Ae=C&&!!S.clearcoatRoughnessMap,ke=N&&!!S.iridescenceMap,te=N&&!!S.iridescenceThicknessMap,de=W&&!!S.sheenColorMap,Ce=W&&!!S.sheenRoughnessMap,Ie=!!S.specularMap,ce=!!S.specularColorMap,Je=!!S.specularIntensityMap,D=Z&&!!S.transmissionMap,xe=Z&&!!S.thicknessMap,se=!!S.gradientMap,be=!!S.alphaMap,ie=S.alphaTest>0,J=!!S.alphaHash,le=!!S.extensions;let We=On;S.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(We=s.toneMapping);const xt={shaderID:me,shaderType:S.type,shaderName:S.name,vertexShader:Ve,fragmentShader:ut,defines:S.defines,customVertexShaderID:dt,customFragmentShaderID:$,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ee,batchingColor:Ee&&k._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&k.instanceColor!==null,instancingMorph:Fe&&k.morphTexture!==null,outputColorSpace:ee===null?s.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:ys,alphaToCoverage:!!S.alphaToCoverage,map:Qe,matcap:ft,envMap:qe,envMapMode:qe&&B.mapping,envMapCubeUVHeight:Q,aoMap:K,lightMap:ne,bumpMap:j,normalMap:ge,displacementMap:I,emissiveMap:De,normalMapObjectSpace:ge&&S.normalMapType===ym,normalMapTangentSpace:ge&&S.normalMapType===Bi,metalnessMap:ye,roughnessMap:Oe,anisotropy:re,anisotropyMap:X,clearcoat:C,clearcoatMap:Re,clearcoatNormalMap:ae,clearcoatRoughnessMap:Ae,dispersion:v,iridescence:N,iridescenceMap:ke,iridescenceThicknessMap:te,sheen:W,sheenColorMap:de,sheenRoughnessMap:Ce,specularMap:Ie,specularColorMap:ce,specularIntensityMap:Je,transmission:Z,transmissionMap:D,thicknessMap:xe,gradientMap:se,opaque:S.transparent===!1&&S.blending===fs&&S.alphaToCoverage===!1,alphaMap:be,alphaTest:ie,alphaHash:J,combine:S.combine,mapUv:Qe&&_(S.map.channel),aoMapUv:K&&_(S.aoMap.channel),lightMapUv:ne&&_(S.lightMap.channel),bumpMapUv:j&&_(S.bumpMap.channel),normalMapUv:ge&&_(S.normalMap.channel),displacementMapUv:I&&_(S.displacementMap.channel),emissiveMapUv:De&&_(S.emissiveMap.channel),metalnessMapUv:ye&&_(S.metalnessMap.channel),roughnessMapUv:Oe&&_(S.roughnessMap.channel),anisotropyMapUv:X&&_(S.anisotropyMap.channel),clearcoatMapUv:Re&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ae&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:te&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:de&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&_(S.sheenRoughnessMap.channel),specularMapUv:Ie&&_(S.specularMap.channel),specularColorMapUv:ce&&_(S.specularColorMap.channel),specularIntensityMapUv:Je&&_(S.specularIntensityMap.channel),transmissionMapUv:D&&_(S.transmissionMap.channel),thicknessMapUv:xe&&_(S.thicknessMap.channel),alphaMapUv:be&&_(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ge||re),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!V.attributes.uv&&(Qe||be),fog:!!q,useFog:S.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Se,skinning:k.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Xe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:We,decodeVideoTexture:Qe&&S.map.isVideoTexture===!0&&je.getTransfer(S.map.colorSpace)===ot,decodeVideoTextureEmissive:De&&S.emissiveMap.isVideoTexture===!0&&je.getTransfer(S.emissiveMap.colorSpace)===ot,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===En,flipSided:S.side===en,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:le&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&S.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return xt.vertexUv1s=c.has(1),xt.vertexUv2s=c.has(2),xt.vertexUv3s=c.has(3),c.clear(),xt}function m(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)M.push(L),M.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(x(M,S),y(M,S),M.push(s.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function x(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function b(S){const M=p[S.type];let L;if(M){const F=Ln[M];L=Dm.clone(F.uniforms)}else L=S.uniforms;return L}function w(S,M){let L=u.get(M);return L!==void 0?++L.usedTimes:(L=new gw(s,M,S,r),h.push(L),u.set(M,L)),L}function T(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),u.delete(S.cacheKey),S.destroy()}}function R(S){l.remove(S)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:b,acquireProgram:w,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:P}}function bw(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Sw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function ip(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function sp(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,p,_,g){let m=s[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:_,group:g},s[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=_,m.group=g),e++,m}function o(u,d,f,p,_,g){const m=a(u,d,f,p,_,g);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function l(u,d,f,p,_,g){const m=a(u,d,f,p,_,g);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function c(u,d){t.length>1&&t.sort(u||Sw),n.length>1&&n.sort(d||ip),i.length>1&&i.sort(d||ip)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Mw(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new sp,s.set(n,[a])):i>=r.length?(a=new sp,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function ww(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new ve};break;case"SpotLight":t={position:new A,direction:new A,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":t={color:new ve,position:new A,halfWidth:new A,halfHeight:new A};break}return s[e.id]=t,t}}}function Ew(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Tw=0;function Aw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Cw(s){const e=new ww,t=Ew(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);const i=new A,r=new ze,a=new ze;function o(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,x=0,y=0,b=0,w=0,T=0,R=0;c.sort(Aw);for(let S=0,M=c.length;S<M;S++){const L=c[S],F=L.color,k=L.intensity,q=L.distance;let V=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===xs?V=L.shadow.map.texture:V=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=F.r*k,u+=F.g*k,d+=F.b*k;else if(L.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(L.sh.coefficients[H],k);R++}else if(L.isDirectionalLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const B=L.shadow,Q=t.get(L);Q.shadowIntensity=B.intensity,Q.shadowBias=B.bias,Q.shadowNormalBias=B.normalBias,Q.shadowRadius=B.radius,Q.shadowMapSize=B.mapSize,n.directionalShadow[f]=Q,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=L.shadow.matrix,x++}n.directional[f]=H,f++}else if(L.isSpotLight){const H=e.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(F).multiplyScalar(k),H.distance=q,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,n.spot[_]=H;const B=L.shadow;if(L.map&&(n.spotLightMap[w]=L.map,w++,B.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[_]=B.matrix,L.castShadow){const Q=t.get(L);Q.shadowIntensity=B.intensity,Q.shadowBias=B.bias,Q.shadowNormalBias=B.normalBias,Q.shadowRadius=B.radius,Q.shadowMapSize=B.mapSize,n.spotShadow[_]=Q,n.spotShadowMap[_]=V,b++}_++}else if(L.isRectAreaLight){const H=e.get(L);H.color.copy(F).multiplyScalar(k),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=H,g++}else if(L.isPointLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){const B=L.shadow,Q=t.get(L);Q.shadowIntensity=B.intensity,Q.shadowBias=B.bias,Q.shadowNormalBias=B.normalBias,Q.shadowRadius=B.radius,Q.shadowMapSize=B.mapSize,Q.shadowCameraNear=B.camera.near,Q.shadowCameraFar=B.camera.far,n.pointShadow[p]=Q,n.pointShadowMap[p]=V,n.pointShadowMatrix[p]=L.shadow.matrix,y++}n.point[p]=H,p++}else if(L.isHemisphereLight){const H=e.get(L);H.skyColor.copy(L.color).multiplyScalar(k),H.groundColor.copy(L.groundColor).multiplyScalar(k),n.hemi[m]=H,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==p||P.spotLength!==_||P.rectAreaLength!==g||P.hemiLength!==m||P.numDirectionalShadows!==x||P.numPointShadows!==y||P.numSpotShadows!==b||P.numSpotMaps!==w||P.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=b+w-T,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,P.directionalLength=f,P.pointLength=p,P.spotLength=_,P.rectAreaLength=g,P.hemiLength=m,P.numDirectionalShadows=x,P.numPointShadows=y,P.numSpotShadows=b,P.numSpotMaps=w,P.numLightProbes=R,n.version=Tw++)}function l(c,h){let u=0,d=0,f=0,p=0,_=0;const g=h.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){const y=c[m];if(y.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),u++}else if(y.isSpotLight){const b=n.spot[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const b=n.rectArea[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),p++}else if(y.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){const b=n.hemi[_];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:n}}function rp(s){const e=new Cw(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Rw(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new rp(s),e.set(i,[o])):r>=a.length?(o=new rp(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Iw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Lw=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],Dw=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],ap=new ze,Gr=new A,Th=new A;function Nw(s,e,t){let n=new wr;const i=new Y,r=new Y,a=new _t,o=new Zu,l=new Ju,c={},h=t.maxTextureSize,u={[Kn]:en,[en]:Kn,[En]:En},d=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Y},radius:{value:4}},vertexShader:Iw,fragmentShader:Pw}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new He;p.setAttribute("position",new tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new bt(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kr;let m=this.type;this.render=function(T,R,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;T.type===Yp&&(he("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),T.type=Kr);const S=s.getRenderTarget(),M=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Jn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const k=m!==this.type;k&&R.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(V=>V.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,V=T.length;q<V;q++){const H=T[q],B=H.shadow;if(B===void 0){he("WebGLShadowMap:",H,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const Q=B.getFrameExtents();if(i.multiply(Q),r.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Q.x),i.x=r.x*Q.x,B.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Q.y),i.y=r.y*Q.y,B.mapSize.y=r.y)),B.map===null||k===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===nr){if(H.isPointLight){he("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new vn(i.x,i.y,{format:xs,type:Qn,minFilter:vt,magFilter:vt,generateMipmaps:!1}),B.map.texture.name=H.name+".shadowMap",B.map.depthTexture=new vr(i.x,i.y,Kt),B.map.depthTexture.name=H.name+".shadowMapDepth",B.map.depthTexture.format=ei,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=et,B.map.depthTexture.magFilter=et}else{H.isPointLight?(B.map=new ku(i.x),B.map.depthTexture=new Vm(i.x,Tn)):(B.map=new vn(i.x,i.y),B.map.depthTexture=new vr(i.x,i.y,Tn)),B.map.depthTexture.name=H.name+".shadowMap",B.map.depthTexture.format=ei;const oe=s.state.buffers.depth.getReversed();this.type===Kr?(B.map.depthTexture.compareFunction=oe?rc:sc,B.map.depthTexture.minFilter=vt,B.map.depthTexture.magFilter=vt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=et,B.map.depthTexture.magFilter=et)}B.camera.updateProjectionMatrix()}const me=B.map.isWebGLCubeRenderTarget?6:1;for(let oe=0;oe<me;oe++){if(B.map.isWebGLCubeRenderTarget)s.setRenderTarget(B.map,oe),s.clear();else{oe===0&&(s.setRenderTarget(B.map),s.clear());const ue=B.getViewport(oe);a.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),F.viewport(a)}if(H.isPointLight){const ue=B.camera,Xe=B.matrix,Ve=H.distance||ue.far;Ve!==ue.far&&(ue.far=Ve,ue.updateProjectionMatrix()),Gr.setFromMatrixPosition(H.matrixWorld),ue.position.copy(Gr),Th.copy(ue.position),Th.add(Lw[oe]),ue.up.copy(Dw[oe]),ue.lookAt(Th),ue.updateMatrixWorld(),Xe.makeTranslation(-Gr.x,-Gr.y,-Gr.z),ap.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),B._frustum.setFromProjectionMatrix(ap,ue.coordinateSystem,ue.reversedDepth)}else B.updateMatrices(H);n=B.getFrustum(),b(R,P,B.camera,H,this.type)}B.isPointLightShadow!==!0&&this.type===nr&&x(B,P),B.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(S,M,L)};function x(T,R){const P=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new vn(i.x,i.y,{format:xs,type:Qn})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(R,null,P,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(R,null,P,f,_,null)}function y(T,R,P,S){let M=null;const L=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)M=L;else if(M=P.isPointLight===!0?l:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=M.uuid,k=R.uuid;let q=c[F];q===void 0&&(q={},c[F]=q);let V=q[k];V===void 0&&(V=M.clone(),q[k]=V,R.addEventListener("dispose",w)),M=V}if(M.visible=R.visible,M.wireframe=R.wireframe,S===nr?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=s.properties.get(M);F.light=P}return M}function b(T,R,P,S,M){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===nr)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const k=e.update(T),q=T.material;if(Array.isArray(q)){const V=k.groups;for(let H=0,B=V.length;H<B;H++){const Q=V[H],me=q[Q.materialIndex];if(me&&me.visible){const oe=y(T,me,S,M);T.onBeforeShadow(s,T,R,P,k,oe,Q),s.renderBufferDirect(P,null,k,oe,T,Q),T.onAfterShadow(s,T,R,P,k,oe,Q)}}}else if(q.visible){const V=y(T,q,S,M);T.onBeforeShadow(s,T,R,P,k,V,null),s.renderBufferDirect(P,null,k,V,T,null),T.onAfterShadow(s,T,R,P,k,V,null)}}const F=T.children;for(let k=0,q=F.length;k<q;k++)b(F[k],R,P,S,M)}function w(T){T.target.removeEventListener("dispose",w);for(const P in c){const S=c[P],M=T.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Uw={[tl]:nl,[il]:al,[sl]:ol,[_s]:rl,[nl]:tl,[al]:il,[ol]:sl,[rl]:_s};function Fw(s,e){function t(){let D=!1;const xe=new _t;let se=null;const be=new _t(0,0,0,0);return{setMask:function(ie){se!==ie&&!D&&(s.colorMask(ie,ie,ie,ie),se=ie)},setLocked:function(ie){D=ie},setClear:function(ie,J,le,We,xt){xt===!0&&(ie*=We,J*=We,le*=We),xe.set(ie,J,le,We),be.equals(xe)===!1&&(s.clearColor(ie,J,le,We),be.copy(xe))},reset:function(){D=!1,se=null,be.set(-1,0,0,0)}}}function n(){let D=!1,xe=!1,se=null,be=null,ie=null;return{setReversed:function(J){if(xe!==J){const le=e.get("EXT_clip_control");J?le.clipControlEXT(le.LOWER_LEFT_EXT,le.ZERO_TO_ONE_EXT):le.clipControlEXT(le.LOWER_LEFT_EXT,le.NEGATIVE_ONE_TO_ONE_EXT),xe=J;const We=ie;ie=null,this.setClear(We)}},getReversed:function(){return xe},setTest:function(J){J?ee(s.DEPTH_TEST):Se(s.DEPTH_TEST)},setMask:function(J){se!==J&&!D&&(s.depthMask(J),se=J)},setFunc:function(J){if(xe&&(J=Uw[J]),be!==J){switch(J){case tl:s.depthFunc(s.NEVER);break;case nl:s.depthFunc(s.ALWAYS);break;case il:s.depthFunc(s.LESS);break;case _s:s.depthFunc(s.LEQUAL);break;case sl:s.depthFunc(s.EQUAL);break;case rl:s.depthFunc(s.GEQUAL);break;case al:s.depthFunc(s.GREATER);break;case ol:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}be=J}},setLocked:function(J){D=J},setClear:function(J){ie!==J&&(xe&&(J=1-J),s.clearDepth(J),ie=J)},reset:function(){D=!1,se=null,be=null,ie=null,xe=!1}}}function i(){let D=!1,xe=null,se=null,be=null,ie=null,J=null,le=null,We=null,xt=null;return{setTest:function(lt){D||(lt?ee(s.STENCIL_TEST):Se(s.STENCIL_TEST))},setMask:function(lt){xe!==lt&&!D&&(s.stencilMask(lt),xe=lt)},setFunc:function(lt,zn,si){(se!==lt||be!==zn||ie!==si)&&(s.stencilFunc(lt,zn,si),se=lt,be=zn,ie=si)},setOp:function(lt,zn,si){(J!==lt||le!==zn||We!==si)&&(s.stencilOp(lt,zn,si),J=lt,le=zn,We=si)},setLocked:function(lt){D=lt},setClear:function(lt){xt!==lt&&(s.clearStencil(lt),xt=lt)},reset:function(){D=!1,xe=null,se=null,be=null,ie=null,J=null,le=null,We=null,xt=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],p=null,_=!1,g=null,m=null,x=null,y=null,b=null,w=null,T=null,R=new ve(0,0,0),P=0,S=!1,M=null,L=null,F=null,k=null,q=null;const V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,B=0;const Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(Q)[1]),H=B>=1):Q.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),H=B>=2);let me=null,oe={};const ue=s.getParameter(s.SCISSOR_BOX),Xe=s.getParameter(s.VIEWPORT),Ve=new _t().fromArray(ue),ut=new _t().fromArray(Xe);function dt(D,xe,se,be){const ie=new Uint8Array(4),J=s.createTexture();s.bindTexture(D,J),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let le=0;le<se;le++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(xe,0,s.RGBA,1,1,be,0,s.RGBA,s.UNSIGNED_BYTE,ie):s.texImage2D(xe+le,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ie);return J}const $={};$[s.TEXTURE_2D]=dt(s.TEXTURE_2D,s.TEXTURE_2D,1),$[s.TEXTURE_CUBE_MAP]=dt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[s.TEXTURE_2D_ARRAY]=dt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),$[s.TEXTURE_3D]=dt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(s.DEPTH_TEST),a.setFunc(_s),j(!1),ge(Oh),ee(s.CULL_FACE),K(Jn);function ee(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function Se(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Fe(D,xe){return u[D]!==xe?(s.bindFramebuffer(D,xe),u[D]=xe,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=xe),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=xe),!0):!1}function Ee(D,xe){let se=f,be=!1;if(D){se=d.get(xe),se===void 0&&(se=[],d.set(xe,se));const ie=D.textures;if(se.length!==ie.length||se[0]!==s.COLOR_ATTACHMENT0){for(let J=0,le=ie.length;J<le;J++)se[J]=s.COLOR_ATTACHMENT0+J;se.length=ie.length,be=!0}}else se[0]!==s.BACK&&(se[0]=s.BACK,be=!0);be&&s.drawBuffers(se)}function Qe(D){return p!==D?(s.useProgram(D),p=D,!0):!1}const ft={[Pi]:s.FUNC_ADD,[Zp]:s.FUNC_SUBTRACT,[Jp]:s.FUNC_REVERSE_SUBTRACT};ft[Kp]=s.MIN,ft[jp]=s.MAX;const qe={[Qp]:s.ZERO,[em]:s.ONE,[tm]:s.SRC_COLOR,[Qo]:s.SRC_ALPHA,[om]:s.SRC_ALPHA_SATURATE,[rm]:s.DST_COLOR,[im]:s.DST_ALPHA,[nm]:s.ONE_MINUS_SRC_COLOR,[el]:s.ONE_MINUS_SRC_ALPHA,[am]:s.ONE_MINUS_DST_COLOR,[sm]:s.ONE_MINUS_DST_ALPHA,[lm]:s.CONSTANT_COLOR,[cm]:s.ONE_MINUS_CONSTANT_COLOR,[hm]:s.CONSTANT_ALPHA,[um]:s.ONE_MINUS_CONSTANT_ALPHA};function K(D,xe,se,be,ie,J,le,We,xt,lt){if(D===Jn){_===!0&&(Se(s.BLEND),_=!1);return}if(_===!1&&(ee(s.BLEND),_=!0),D!==$p){if(D!==g||lt!==S){if((m!==Pi||b!==Pi)&&(s.blendEquation(s.FUNC_ADD),m=Pi,b=Pi),lt)switch(D){case fs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jo:s.blendFunc(s.ONE,s.ONE);break;case kh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Bh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Pe("WebGLState: Invalid blending: ",D);break}else switch(D){case fs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case kh:Pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bh:Pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pe("WebGLState: Invalid blending: ",D);break}x=null,y=null,w=null,T=null,R.set(0,0,0),P=0,g=D,S=lt}return}ie=ie||xe,J=J||se,le=le||be,(xe!==m||ie!==b)&&(s.blendEquationSeparate(ft[xe],ft[ie]),m=xe,b=ie),(se!==x||be!==y||J!==w||le!==T)&&(s.blendFuncSeparate(qe[se],qe[be],qe[J],qe[le]),x=se,y=be,w=J,T=le),(We.equals(R)===!1||xt!==P)&&(s.blendColor(We.r,We.g,We.b,xt),R.copy(We),P=xt),g=D,S=!1}function ne(D,xe){D.side===En?Se(s.CULL_FACE):ee(s.CULL_FACE);let se=D.side===en;xe&&(se=!se),j(se),D.blending===fs&&D.transparent===!1?K(Jn):K(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const be=D.stencilWrite;o.setTest(be),be&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),De(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ee(s.SAMPLE_ALPHA_TO_COVERAGE):Se(s.SAMPLE_ALPHA_TO_COVERAGE)}function j(D){M!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),M=D)}function ge(D){D!==Xp?(ee(s.CULL_FACE),D!==L&&(D===Oh?s.cullFace(s.BACK):D===qp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Se(s.CULL_FACE),L=D}function I(D){D!==F&&(H&&s.lineWidth(D),F=D)}function De(D,xe,se){D?(ee(s.POLYGON_OFFSET_FILL),(k!==xe||q!==se)&&(s.polygonOffset(xe,se),k=xe,q=se)):Se(s.POLYGON_OFFSET_FILL)}function ye(D){D?ee(s.SCISSOR_TEST):Se(s.SCISSOR_TEST)}function Oe(D){D===void 0&&(D=s.TEXTURE0+V-1),me!==D&&(s.activeTexture(D),me=D)}function re(D,xe,se){se===void 0&&(me===null?se=s.TEXTURE0+V-1:se=me);let be=oe[se];be===void 0&&(be={type:void 0,texture:void 0},oe[se]=be),(be.type!==D||be.texture!==xe)&&(me!==se&&(s.activeTexture(se),me=se),s.bindTexture(D,xe||$[D]),be.type=D,be.texture=xe)}function C(){const D=oe[me];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function v(){try{s.compressedTexImage2D(...arguments)}catch(D){Pe("WebGLState:",D)}}function N(){try{s.compressedTexImage3D(...arguments)}catch(D){Pe("WebGLState:",D)}}function W(){try{s.texSubImage2D(...arguments)}catch(D){Pe("WebGLState:",D)}}function Z(){try{s.texSubImage3D(...arguments)}catch(D){Pe("WebGLState:",D)}}function X(){try{s.compressedTexSubImage2D(...arguments)}catch(D){Pe("WebGLState:",D)}}function Re(){try{s.compressedTexSubImage3D(...arguments)}catch(D){Pe("WebGLState:",D)}}function ae(){try{s.texStorage2D(...arguments)}catch(D){Pe("WebGLState:",D)}}function Ae(){try{s.texStorage3D(...arguments)}catch(D){Pe("WebGLState:",D)}}function ke(){try{s.texImage2D(...arguments)}catch(D){Pe("WebGLState:",D)}}function te(){try{s.texImage3D(...arguments)}catch(D){Pe("WebGLState:",D)}}function de(D){Ve.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Ve.copy(D))}function Ce(D){ut.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),ut.copy(D))}function Ie(D,xe){let se=c.get(xe);se===void 0&&(se=new WeakMap,c.set(xe,se));let be=se.get(D);be===void 0&&(be=s.getUniformBlockIndex(xe,D.name),se.set(D,be))}function ce(D,xe){const be=c.get(xe).get(D);l.get(xe)!==be&&(s.uniformBlockBinding(xe,be,D.__bindingPointIndex),l.set(xe,be))}function Je(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},me=null,oe={},u={},d=new WeakMap,f=[],p=null,_=!1,g=null,m=null,x=null,y=null,b=null,w=null,T=null,R=new ve(0,0,0),P=0,S=!1,M=null,L=null,F=null,k=null,q=null,Ve.set(0,0,s.canvas.width,s.canvas.height),ut.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:Se,bindFramebuffer:Fe,drawBuffers:Ee,useProgram:Qe,setBlending:K,setMaterial:ne,setFlipSided:j,setCullFace:ge,setLineWidth:I,setPolygonOffset:De,setScissorTest:ye,activeTexture:Oe,bindTexture:re,unbindTexture:C,compressedTexImage2D:v,compressedTexImage3D:N,texImage2D:ke,texImage3D:te,updateUBOMapping:Ie,uniformBlockBinding:ce,texStorage2D:ae,texStorage3D:Ae,texSubImage2D:W,texSubImage3D:Z,compressedTexSubImage2D:X,compressedTexSubImage3D:Re,scissor:de,viewport:Ce,reset:Je}}function Ow(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Y,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,v){return f?new OffscreenCanvas(C,v):ga("canvas")}function _(C,v,N){let W=1;const Z=re(C);if((Z.width>N||Z.height>N)&&(W=N/Math.max(Z.width,Z.height)),W<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const X=Math.floor(W*Z.width),Re=Math.floor(W*Z.height);u===void 0&&(u=p(X,Re));const ae=v?p(X,Re):u;return ae.width=X,ae.height=Re,ae.getContext("2d").drawImage(C,0,0,X,Re),he("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+X+"x"+Re+")."),ae}else return"data"in C&&he("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function g(C){return C.generateMipmaps}function m(C){s.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(C,v,N,W,Z=!1){if(C!==null){if(s[C]!==void 0)return s[C];he("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let X=v;if(v===s.RED&&(N===s.FLOAT&&(X=s.R32F),N===s.HALF_FLOAT&&(X=s.R16F),N===s.UNSIGNED_BYTE&&(X=s.R8)),v===s.RED_INTEGER&&(N===s.UNSIGNED_BYTE&&(X=s.R8UI),N===s.UNSIGNED_SHORT&&(X=s.R16UI),N===s.UNSIGNED_INT&&(X=s.R32UI),N===s.BYTE&&(X=s.R8I),N===s.SHORT&&(X=s.R16I),N===s.INT&&(X=s.R32I)),v===s.RG&&(N===s.FLOAT&&(X=s.RG32F),N===s.HALF_FLOAT&&(X=s.RG16F),N===s.UNSIGNED_BYTE&&(X=s.RG8)),v===s.RG_INTEGER&&(N===s.UNSIGNED_BYTE&&(X=s.RG8UI),N===s.UNSIGNED_SHORT&&(X=s.RG16UI),N===s.UNSIGNED_INT&&(X=s.RG32UI),N===s.BYTE&&(X=s.RG8I),N===s.SHORT&&(X=s.RG16I),N===s.INT&&(X=s.RG32I)),v===s.RGB_INTEGER&&(N===s.UNSIGNED_BYTE&&(X=s.RGB8UI),N===s.UNSIGNED_SHORT&&(X=s.RGB16UI),N===s.UNSIGNED_INT&&(X=s.RGB32UI),N===s.BYTE&&(X=s.RGB8I),N===s.SHORT&&(X=s.RGB16I),N===s.INT&&(X=s.RGB32I)),v===s.RGBA_INTEGER&&(N===s.UNSIGNED_BYTE&&(X=s.RGBA8UI),N===s.UNSIGNED_SHORT&&(X=s.RGBA16UI),N===s.UNSIGNED_INT&&(X=s.RGBA32UI),N===s.BYTE&&(X=s.RGBA8I),N===s.SHORT&&(X=s.RGBA16I),N===s.INT&&(X=s.RGBA32I)),v===s.RGB&&(N===s.UNSIGNED_INT_5_9_9_9_REV&&(X=s.RGB9_E5),N===s.UNSIGNED_INT_10F_11F_11F_REV&&(X=s.R11F_G11F_B10F)),v===s.RGBA){const Re=Z?pa:je.getTransfer(W);N===s.FLOAT&&(X=s.RGBA32F),N===s.HALF_FLOAT&&(X=s.RGBA16F),N===s.UNSIGNED_BYTE&&(X=Re===ot?s.SRGB8_ALPHA8:s.RGBA8),N===s.UNSIGNED_SHORT_4_4_4_4&&(X=s.RGBA4),N===s.UNSIGNED_SHORT_5_5_5_1&&(X=s.RGB5_A1)}return(X===s.R16F||X===s.R32F||X===s.RG16F||X===s.RG32F||X===s.RGBA16F||X===s.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function b(C,v){let N;return C?v===null||v===Tn||v===pr?N=s.DEPTH24_STENCIL8:v===Kt?N=s.DEPTH32F_STENCIL8:v===fr&&(N=s.DEPTH24_STENCIL8,he("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Tn||v===pr?N=s.DEPTH_COMPONENT24:v===Kt?N=s.DEPTH_COMPONENT32F:v===fr&&(N=s.DEPTH_COMPONENT16),N}function w(C,v){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==et&&C.minFilter!==vt?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function T(C){const v=C.target;v.removeEventListener("dispose",T),P(v),v.isVideoTexture&&h.delete(v)}function R(C){const v=C.target;v.removeEventListener("dispose",R),M(v)}function P(C){const v=n.get(C);if(v.__webglInit===void 0)return;const N=C.source,W=d.get(N);if(W){const Z=W[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(C),Object.keys(W).length===0&&d.delete(N)}n.remove(C)}function S(C){const v=n.get(C);s.deleteTexture(v.__webglTexture);const N=C.source,W=d.get(N);delete W[v.__cacheKey],a.memory.textures--}function M(C){const v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let Z=0;Z<v.__webglFramebuffer[W].length;Z++)s.deleteFramebuffer(v.__webglFramebuffer[W][Z]);else s.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)s.deleteFramebuffer(v.__webglFramebuffer[W]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const N=C.textures;for(let W=0,Z=N.length;W<Z;W++){const X=n.get(N[W]);X.__webglTexture&&(s.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(N[W])}n.remove(C)}let L=0;function F(){L=0}function k(){const C=L;return C>=i.maxTextures&&he("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),L+=1,C}function q(C){const v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function V(C,v){const N=n.get(C);if(C.isVideoTexture&&ye(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&N.__version!==C.version){const W=C.image;if(W===null)he("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)he("WebGLRenderer: Texture marked for update but image is incomplete");else{$(N,C,v);return}}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,N.__webglTexture,s.TEXTURE0+v)}function H(C,v){const N=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){$(N,C,v);return}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,N.__webglTexture,s.TEXTURE0+v)}function B(C,v){const N=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){$(N,C,v);return}t.bindTexture(s.TEXTURE_3D,N.__webglTexture,s.TEXTURE0+v)}function Q(C,v){const N=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&N.__version!==C.version){ee(N,C,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+v)}const me={[bi]:s.REPEAT,[un]:s.CLAMP_TO_EDGE,[ua]:s.MIRRORED_REPEAT},oe={[et]:s.NEAREST,[Tu]:s.NEAREST_MIPMAP_NEAREST,[ir]:s.NEAREST_MIPMAP_LINEAR,[vt]:s.LINEAR,[jr]:s.LINEAR_MIPMAP_NEAREST,[$n]:s.LINEAR_MIPMAP_LINEAR},ue={[vm]:s.NEVER,[Em]:s.ALWAYS,[bm]:s.LESS,[sc]:s.LEQUAL,[Sm]:s.EQUAL,[rc]:s.GEQUAL,[Mm]:s.GREATER,[wm]:s.NOTEQUAL};function Xe(C,v){if(v.type===Kt&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===vt||v.magFilter===jr||v.magFilter===ir||v.magFilter===$n||v.minFilter===vt||v.minFilter===jr||v.minFilter===ir||v.minFilter===$n)&&he("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,me[v.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,me[v.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,me[v.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,oe[v.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,oe[v.minFilter]),v.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,ue[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===et||v.minFilter!==ir&&v.minFilter!==$n||v.type===Kt&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ve(C,v){let N=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",T));const W=v.source;let Z=d.get(W);Z===void 0&&(Z={},d.set(W,Z));const X=q(v);if(X!==C.__cacheKey){Z[X]===void 0&&(Z[X]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,N=!0),Z[X].usedTimes++;const Re=Z[C.__cacheKey];Re!==void 0&&(Z[C.__cacheKey].usedTimes--,Re.usedTimes===0&&S(v)),C.__cacheKey=X,C.__webglTexture=Z[X].texture}return N}function ut(C,v,N){return Math.floor(Math.floor(C/N)/v)}function dt(C,v,N,W){const X=C.updateRanges;if(X.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,N,W,v.data);else{X.sort((te,de)=>te.start-de.start);let Re=0;for(let te=1;te<X.length;te++){const de=X[Re],Ce=X[te],Ie=de.start+de.count,ce=ut(Ce.start,v.width,4),Je=ut(de.start,v.width,4);Ce.start<=Ie+1&&ce===Je&&ut(Ce.start+Ce.count-1,v.width,4)===ce?de.count=Math.max(de.count,Ce.start+Ce.count-de.start):(++Re,X[Re]=Ce)}X.length=Re+1;const ae=s.getParameter(s.UNPACK_ROW_LENGTH),Ae=s.getParameter(s.UNPACK_SKIP_PIXELS),ke=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let te=0,de=X.length;te<de;te++){const Ce=X[te],Ie=Math.floor(Ce.start/4),ce=Math.ceil(Ce.count/4),Je=Ie%v.width,D=Math.floor(Ie/v.width),xe=ce,se=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Je),s.pixelStorei(s.UNPACK_SKIP_ROWS,D),t.texSubImage2D(s.TEXTURE_2D,0,Je,D,xe,se,N,W,v.data)}C.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ae),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ae),s.pixelStorei(s.UNPACK_SKIP_ROWS,ke)}}function $(C,v,N){let W=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=s.TEXTURE_3D);const Z=Ve(C,v),X=v.source;t.bindTexture(W,C.__webglTexture,s.TEXTURE0+N);const Re=n.get(X);if(X.version!==Re.__version||Z===!0){t.activeTexture(s.TEXTURE0+N);const ae=je.getPrimaries(je.workingColorSpace),Ae=v.colorSpace===fi?null:je.getPrimaries(v.colorSpace),ke=v.colorSpace===fi||ae===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let te=_(v.image,!1,i.maxTextureSize);te=Oe(v,te);const de=r.convert(v.format,v.colorSpace),Ce=r.convert(v.type);let Ie=y(v.internalFormat,de,Ce,v.colorSpace,v.isVideoTexture);Xe(W,v);let ce;const Je=v.mipmaps,D=v.isVideoTexture!==!0,xe=Re.__version===void 0||Z===!0,se=X.dataReady,be=w(v,te);if(v.isDepthTexture)Ie=b(v.format===Di,v.type),xe&&(D?t.texStorage2D(s.TEXTURE_2D,1,Ie,te.width,te.height):t.texImage2D(s.TEXTURE_2D,0,Ie,te.width,te.height,0,de,Ce,null));else if(v.isDataTexture)if(Je.length>0){D&&xe&&t.texStorage2D(s.TEXTURE_2D,be,Ie,Je[0].width,Je[0].height);for(let ie=0,J=Je.length;ie<J;ie++)ce=Je[ie],D?se&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,ce.width,ce.height,de,Ce,ce.data):t.texImage2D(s.TEXTURE_2D,ie,Ie,ce.width,ce.height,0,de,Ce,ce.data);v.generateMipmaps=!1}else D?(xe&&t.texStorage2D(s.TEXTURE_2D,be,Ie,te.width,te.height),se&&dt(v,te,de,Ce)):t.texImage2D(s.TEXTURE_2D,0,Ie,te.width,te.height,0,de,Ce,te.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){D&&xe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,Ie,Je[0].width,Je[0].height,te.depth);for(let ie=0,J=Je.length;ie<J;ie++)if(ce=Je[ie],v.format!==jt)if(de!==null)if(D){if(se)if(v.layerUpdates.size>0){const le=Jh(ce.width,ce.height,v.format,v.type);for(const We of v.layerUpdates){const xt=ce.data.subarray(We*le/ce.data.BYTES_PER_ELEMENT,(We+1)*le/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,We,ce.width,ce.height,1,de,xt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,ce.width,ce.height,te.depth,de,ce.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,Ie,ce.width,ce.height,te.depth,0,ce.data,0,0);else he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?se&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,ce.width,ce.height,te.depth,de,Ce,ce.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ie,Ie,ce.width,ce.height,te.depth,0,de,Ce,ce.data)}else{D&&xe&&t.texStorage2D(s.TEXTURE_2D,be,Ie,Je[0].width,Je[0].height);for(let ie=0,J=Je.length;ie<J;ie++)ce=Je[ie],v.format!==jt?de!==null?D?se&&t.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,ce.width,ce.height,de,ce.data):t.compressedTexImage2D(s.TEXTURE_2D,ie,Ie,ce.width,ce.height,0,ce.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?se&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,ce.width,ce.height,de,Ce,ce.data):t.texImage2D(s.TEXTURE_2D,ie,Ie,ce.width,ce.height,0,de,Ce,ce.data)}else if(v.isDataArrayTexture)if(D){if(xe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,Ie,te.width,te.height,te.depth),se)if(v.layerUpdates.size>0){const ie=Jh(te.width,te.height,v.format,v.type);for(const J of v.layerUpdates){const le=te.data.subarray(J*ie/te.data.BYTES_PER_ELEMENT,(J+1)*ie/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,te.width,te.height,1,de,Ce,le)}v.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,de,Ce,te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ie,te.width,te.height,te.depth,0,de,Ce,te.data);else if(v.isData3DTexture)D?(xe&&t.texStorage3D(s.TEXTURE_3D,be,Ie,te.width,te.height,te.depth),se&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,de,Ce,te.data)):t.texImage3D(s.TEXTURE_3D,0,Ie,te.width,te.height,te.depth,0,de,Ce,te.data);else if(v.isFramebufferTexture){if(xe)if(D)t.texStorage2D(s.TEXTURE_2D,be,Ie,te.width,te.height);else{let ie=te.width,J=te.height;for(let le=0;le<be;le++)t.texImage2D(s.TEXTURE_2D,le,Ie,ie,J,0,de,Ce,null),ie>>=1,J>>=1}}else if(Je.length>0){if(D&&xe){const ie=re(Je[0]);t.texStorage2D(s.TEXTURE_2D,be,Ie,ie.width,ie.height)}for(let ie=0,J=Je.length;ie<J;ie++)ce=Je[ie],D?se&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,de,Ce,ce):t.texImage2D(s.TEXTURE_2D,ie,Ie,de,Ce,ce);v.generateMipmaps=!1}else if(D){if(xe){const ie=re(te);t.texStorage2D(s.TEXTURE_2D,be,Ie,ie.width,ie.height)}se&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,de,Ce,te)}else t.texImage2D(s.TEXTURE_2D,0,Ie,de,Ce,te);g(v)&&m(W),Re.__version=X.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function ee(C,v,N){if(v.image.length!==6)return;const W=Ve(C,v),Z=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+N);const X=n.get(Z);if(Z.version!==X.__version||W===!0){t.activeTexture(s.TEXTURE0+N);const Re=je.getPrimaries(je.workingColorSpace),ae=v.colorSpace===fi?null:je.getPrimaries(v.colorSpace),Ae=v.colorSpace===fi||Re===ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const ke=v.isCompressedTexture||v.image[0].isCompressedTexture,te=v.image[0]&&v.image[0].isDataTexture,de=[];for(let J=0;J<6;J++)!ke&&!te?de[J]=_(v.image[J],!0,i.maxCubemapSize):de[J]=te?v.image[J].image:v.image[J],de[J]=Oe(v,de[J]);const Ce=de[0],Ie=r.convert(v.format,v.colorSpace),ce=r.convert(v.type),Je=y(v.internalFormat,Ie,ce,v.colorSpace),D=v.isVideoTexture!==!0,xe=X.__version===void 0||W===!0,se=Z.dataReady;let be=w(v,Ce);Xe(s.TEXTURE_CUBE_MAP,v);let ie;if(ke){D&&xe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,be,Je,Ce.width,Ce.height);for(let J=0;J<6;J++){ie=de[J].mipmaps;for(let le=0;le<ie.length;le++){const We=ie[le];v.format!==jt?Ie!==null?D?se&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,0,0,We.width,We.height,Ie,We.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,Je,We.width,We.height,0,We.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,0,0,We.width,We.height,Ie,ce,We.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,Je,We.width,We.height,0,Ie,ce,We.data)}}}else{if(ie=v.mipmaps,D&&xe){ie.length>0&&be++;const J=re(de[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,be,Je,J.width,J.height)}for(let J=0;J<6;J++)if(te){D?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,de[J].width,de[J].height,Ie,ce,de[J].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Je,de[J].width,de[J].height,0,Ie,ce,de[J].data);for(let le=0;le<ie.length;le++){const xt=ie[le].image[J].image;D?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,0,0,xt.width,xt.height,Ie,ce,xt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,Je,xt.width,xt.height,0,Ie,ce,xt.data)}}else{D?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ie,ce,de[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Je,Ie,ce,de[J]);for(let le=0;le<ie.length;le++){const We=ie[le];D?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,0,0,Ie,ce,We.image[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,Je,Ie,ce,We.image[J])}}}g(v)&&m(s.TEXTURE_CUBE_MAP),X.__version=Z.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Se(C,v,N,W,Z,X){const Re=r.convert(N.format,N.colorSpace),ae=r.convert(N.type),Ae=y(N.internalFormat,Re,ae,N.colorSpace),ke=n.get(v),te=n.get(N);if(te.__renderTarget=v,!ke.__hasExternalTextures){const de=Math.max(1,v.width>>X),Ce=Math.max(1,v.height>>X);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,X,Ae,de,Ce,v.depth,0,Re,ae,null):t.texImage2D(Z,X,Ae,de,Ce,0,Re,ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),De(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,W,Z,te.__webglTexture,0,I(v)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,W,Z,te.__webglTexture,X),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(C,v,N){if(s.bindRenderbuffer(s.RENDERBUFFER,C),v.depthBuffer){const W=v.depthTexture,Z=W&&W.isDepthTexture?W.type:null,X=b(v.stencilBuffer,Z),Re=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;De(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,I(v),X,v.width,v.height):N?s.renderbufferStorageMultisample(s.RENDERBUFFER,I(v),X,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,X,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Re,s.RENDERBUFFER,C)}else{const W=v.textures;for(let Z=0;Z<W.length;Z++){const X=W[Z],Re=r.convert(X.format,X.colorSpace),ae=r.convert(X.type),Ae=y(X.internalFormat,Re,ae,X.colorSpace);De(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,I(v),Ae,v.width,v.height):N?s.renderbufferStorageMultisample(s.RENDERBUFFER,I(v),Ae,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,Ae,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ee(C,v,N){const W=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(v.depthTexture);if(Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,v.depthTexture.addEventListener("dispose",T)),Z.__webglTexture===void 0){Z.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),Xe(s.TEXTURE_CUBE_MAP,v.depthTexture);const ke=r.convert(v.depthTexture.format),te=r.convert(v.depthTexture.type);let de;v.depthTexture.format===ei?de=s.DEPTH_COMPONENT24:v.depthTexture.format===Di&&(de=s.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,de,v.width,v.height,0,ke,te,null)}}else V(v.depthTexture,0);const X=Z.__webglTexture,Re=I(v),ae=W?s.TEXTURE_CUBE_MAP_POSITIVE_X+N:s.TEXTURE_2D,Ae=v.depthTexture.format===Di?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(v.depthTexture.format===ei)De(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ae,ae,X,0,Re):s.framebufferTexture2D(s.FRAMEBUFFER,Ae,ae,X,0);else if(v.depthTexture.format===Di)De(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ae,ae,X,0,Re):s.framebufferTexture2D(s.FRAMEBUFFER,Ae,ae,X,0);else throw new Error("Unknown depthTexture format")}function Qe(C){const v=n.get(C),N=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){const W=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){const Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",Z)};W.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=W}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(N)for(let W=0;W<6;W++)Ee(v.__webglFramebuffer[W],C,W);else{const W=C.texture.mipmaps;W&&W.length>0?Ee(v.__webglFramebuffer[0],C,0):Ee(v.__webglFramebuffer,C,0)}else if(N){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=s.createRenderbuffer(),Fe(v.__webglDepthbuffer[W],C,!1);else{const Z=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[W];s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,X)}}else{const W=C.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),Fe(v.__webglDepthbuffer,C,!1);else{const Z=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,X)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ft(C,v,N){const W=n.get(C);v!==void 0&&Se(W.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),N!==void 0&&Qe(C)}function qe(C){const v=C.texture,N=n.get(C),W=n.get(v);C.addEventListener("dispose",R);const Z=C.textures,X=C.isWebGLCubeRenderTarget===!0,Re=Z.length>1;if(Re||(W.__webglTexture===void 0&&(W.__webglTexture=s.createTexture()),W.__version=v.version,a.memory.textures++),X){N.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[ae]=[];for(let Ae=0;Ae<v.mipmaps.length;Ae++)N.__webglFramebuffer[ae][Ae]=s.createFramebuffer()}else N.__webglFramebuffer[ae]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let ae=0;ae<v.mipmaps.length;ae++)N.__webglFramebuffer[ae]=s.createFramebuffer()}else N.__webglFramebuffer=s.createFramebuffer();if(Re)for(let ae=0,Ae=Z.length;ae<Ae;ae++){const ke=n.get(Z[ae]);ke.__webglTexture===void 0&&(ke.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&De(C)===!1){N.__webglMultisampledFramebuffer=s.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ae=0;ae<Z.length;ae++){const Ae=Z[ae];N.__webglColorRenderbuffer[ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,N.__webglColorRenderbuffer[ae]);const ke=r.convert(Ae.format,Ae.colorSpace),te=r.convert(Ae.type),de=y(Ae.internalFormat,ke,te,Ae.colorSpace,C.isXRRenderTarget===!0),Ce=I(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,de,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.RENDERBUFFER,N.__webglColorRenderbuffer[ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(N.__webglDepthRenderbuffer=s.createRenderbuffer(),Fe(N.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(X){t.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture),Xe(s.TEXTURE_CUBE_MAP,v);for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ae=0;Ae<v.mipmaps.length;Ae++)Se(N.__webglFramebuffer[ae][Ae],C,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae);else Se(N.__webglFramebuffer[ae],C,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);g(v)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let ae=0,Ae=Z.length;ae<Ae;ae++){const ke=Z[ae],te=n.get(ke);let de=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(de=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(de,te.__webglTexture),Xe(de,ke),Se(N.__webglFramebuffer,C,ke,s.COLOR_ATTACHMENT0+ae,de,0),g(ke)&&m(de)}t.unbindTexture()}else{let ae=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ae=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ae,W.__webglTexture),Xe(ae,v),v.mipmaps&&v.mipmaps.length>0)for(let Ae=0;Ae<v.mipmaps.length;Ae++)Se(N.__webglFramebuffer[Ae],C,v,s.COLOR_ATTACHMENT0,ae,Ae);else Se(N.__webglFramebuffer,C,v,s.COLOR_ATTACHMENT0,ae,0);g(v)&&m(ae),t.unbindTexture()}C.depthBuffer&&Qe(C)}function K(C){const v=C.textures;for(let N=0,W=v.length;N<W;N++){const Z=v[N];if(g(Z)){const X=x(C),Re=n.get(Z).__webglTexture;t.bindTexture(X,Re),m(X),t.unbindTexture()}}}const ne=[],j=[];function ge(C){if(C.samples>0){if(De(C)===!1){const v=C.textures,N=C.width,W=C.height;let Z=s.COLOR_BUFFER_BIT;const X=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=n.get(C),ae=v.length>1;if(ae)for(let ke=0;ke<v.length;ke++)t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const Ae=C.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let ke=0;ke<v.length;ke++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Re.__webglColorRenderbuffer[ke]);const te=n.get(v[ke]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,te,0)}s.blitFramebuffer(0,0,N,W,0,0,N,W,Z,s.NEAREST),l===!0&&(ne.length=0,j.length=0,ne.push(s.COLOR_ATTACHMENT0+ke),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ne.push(X),j.push(X),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,j)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ne))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ae)for(let ke=0;ke<v.length;ke++){t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,Re.__webglColorRenderbuffer[ke]);const te=n.get(v[ke]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,te,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const v=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function I(C){return Math.min(i.maxSamples,C.samples)}function De(C){const v=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ye(C){const v=a.render.frame;h.get(C)!==v&&(h.set(C,v),C.update())}function Oe(C,v){const N=C.colorSpace,W=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||N!==ys&&N!==fi&&(je.getTransfer(N)===ot?(W!==jt||Z!==cn)&&he("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pe("WebGLTextures: Unsupported texture color space:",N)),v}function re(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=V,this.setTexture2DArray=H,this.setTexture3D=B,this.setTextureCube=Q,this.rebindTextures=ft,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=De,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Lg(s,e){function t(n,i=fi){let r;const a=je.getTransfer(i);if(n===cn)return s.UNSIGNED_BYTE;if(n===jl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ql)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ru)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Iu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Au)return s.BYTE;if(n===Cu)return s.SHORT;if(n===fr)return s.UNSIGNED_SHORT;if(n===Kl)return s.INT;if(n===Tn)return s.UNSIGNED_INT;if(n===Kt)return s.FLOAT;if(n===Qn)return s.HALF_FLOAT;if(n===Pu)return s.ALPHA;if(n===Lu)return s.RGB;if(n===jt)return s.RGBA;if(n===ei)return s.DEPTH_COMPONENT;if(n===Di)return s.DEPTH_STENCIL;if(n===ec)return s.RED;if(n===Aa)return s.RED_INTEGER;if(n===xs)return s.RG;if(n===tc)return s.RG_INTEGER;if(n===nc)return s.RGBA_INTEGER;if(n===Qr||n===ea||n===ta||n===na)if(a===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ll||n===cl||n===hl||n===ul)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ul)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dl||n===fl||n===pl||n===ml||n===gl||n===_l||n===xl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===dl||n===fl)return a===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===pl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ml)return r.COMPRESSED_R11_EAC;if(n===gl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===_l)return r.COMPRESSED_RG11_EAC;if(n===xl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===yl||n===vl||n===bl||n===Sl||n===Ml||n===wl||n===El||n===Tl||n===Al||n===Cl||n===Rl||n===Il||n===Pl||n===Ll)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===yl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ml)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===El)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Al)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Cl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Rl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Il)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ll)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Dl||n===Nl||n===Ul)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Dl)return a===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ul)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fl||n===Ol||n===kl||n===Bl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ol)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===kl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===pr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const kw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Gw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new zu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new An({vertexShader:kw,fragmentShader:Bw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bt(new ii(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zw extends ti{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null;const _=typeof XRWebGLBinding<"u",g=new Gw,m={},x=t.getContextAttributes();let y=null,b=null;const w=[],T=[],R=new Y;let P=null;const S=new kt;S.viewport=new _t;const M=new kt;M.viewport=new _t;const L=[S,M],F=new vg;let k=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ee=w[$];return ee===void 0&&(ee=new Vo,w[$]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function($){let ee=w[$];return ee===void 0&&(ee=new Vo,w[$]=ee),ee.getGripSpace()},this.getHand=function($){let ee=w[$];return ee===void 0&&(ee=new Vo,w[$]=ee),ee.getHandSpace()};function V($){const ee=T.indexOf($.inputSource);if(ee===-1)return;const Se=w[ee];Se!==void 0&&(Se.update($.inputSource,$.frame,c||a),Se.dispatchEvent({type:$.type,data:$.inputSource}))}function H(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",B);for(let $=0;$<w.length;$++){const ee=T[$];ee!==null&&(T[$]=null,w[$].disconnect(ee))}k=null,q=null,g.reset();for(const $ in m)delete m[$];e.setRenderTarget(y),f=null,d=null,u=null,i=null,b=null,dt.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&he("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&he("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",H),i.addEventListener("inputsourceschange",B),x.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Fe=null,Ee=null;x.depth&&(Ee=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=x.stencil?Di:ei,Fe=x.stencil?pr:Tn);const Qe={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Qe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new vn(d.textureWidth,d.textureHeight,{format:jt,type:cn,depthTexture:new vr(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Se={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,Se),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new vn(f.framebufferWidth,f.framebufferHeight,{format:jt,type:cn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),dt.setContext(i),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function B($){for(let ee=0;ee<$.removed.length;ee++){const Se=$.removed[ee],Fe=T.indexOf(Se);Fe>=0&&(T[Fe]=null,w[Fe].disconnect(Se))}for(let ee=0;ee<$.added.length;ee++){const Se=$.added[ee];let Fe=T.indexOf(Se);if(Fe===-1){for(let Qe=0;Qe<w.length;Qe++)if(Qe>=T.length){T.push(Se),Fe=Qe;break}else if(T[Qe]===null){T[Qe]=Se,Fe=Qe;break}if(Fe===-1)break}const Ee=w[Fe];Ee&&Ee.connect(Se)}}const Q=new A,me=new A;function oe($,ee,Se){Q.setFromMatrixPosition(ee.matrixWorld),me.setFromMatrixPosition(Se.matrixWorld);const Fe=Q.distanceTo(me),Ee=ee.projectionMatrix.elements,Qe=Se.projectionMatrix.elements,ft=Ee[14]/(Ee[10]-1),qe=Ee[14]/(Ee[10]+1),K=(Ee[9]+1)/Ee[5],ne=(Ee[9]-1)/Ee[5],j=(Ee[8]-1)/Ee[0],ge=(Qe[8]+1)/Qe[0],I=ft*j,De=ft*ge,ye=Fe/(-j+ge),Oe=ye*-j;if(ee.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Oe),$.translateZ(ye),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ee[10]===-1)$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const re=ft+ye,C=qe+ye,v=I-Oe,N=De+(Fe-Oe),W=K*qe/C*re,Z=ne*qe/C*re;$.projectionMatrix.makePerspective(v,N,W,Z,re,C),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ue($,ee){ee===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ee.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let ee=$.near,Se=$.far;g.texture!==null&&(g.depthNear>0&&(ee=g.depthNear),g.depthFar>0&&(Se=g.depthFar)),F.near=M.near=S.near=ee,F.far=M.far=S.far=Se,(k!==F.near||q!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),k=F.near,q=F.far),F.layers.mask=$.layers.mask|6,S.layers.mask=F.layers.mask&3,M.layers.mask=F.layers.mask&5;const Fe=$.parent,Ee=F.cameras;ue(F,Fe);for(let Qe=0;Qe<Ee.length;Qe++)ue(Ee[Qe],Fe);Ee.length===2?oe(F,S,M):F.projectionMatrix.copy(S.projectionMatrix),Xe($,F,Fe)};function Xe($,ee,Se){Se===null?$.matrix.copy(ee.matrixWorld):($.matrix.copy(Se.matrixWorld),$.matrix.invert(),$.matrix.multiply(ee.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=_r*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function($){return m[$]};let Ve=null;function ut($,ee){if(h=ee.getViewerPose(c||a),p=ee,h!==null){const Se=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Fe=!1;Se.length!==F.cameras.length&&(F.cameras.length=0,Fe=!0);for(let qe=0;qe<Se.length;qe++){const K=Se[qe];let ne=null;if(f!==null)ne=f.getViewport(K);else{const ge=u.getViewSubImage(d,K);ne=ge.viewport,qe===0&&(e.setRenderTargetTextures(b,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(b))}let j=L[qe];j===void 0&&(j=new kt,j.layers.enable(qe),j.viewport=new _t,L[qe]=j),j.matrix.fromArray(K.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(K.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(ne.x,ne.y,ne.width,ne.height),qe===0&&(F.matrix.copy(j.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Fe===!0&&F.cameras.push(j)}const Ee=i.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const qe=u.getDepthInformation(Se[0]);qe&&qe.isValid&&qe.texture&&g.init(qe,i.renderState)}if(Ee&&Ee.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let qe=0;qe<Se.length;qe++){const K=Se[qe].camera;if(K){let ne=m[K];ne||(ne=new zu,m[K]=ne);const j=u.getCameraImage(K);ne.sourceTexture=j}}}}for(let Se=0;Se<w.length;Se++){const Fe=T[Se],Ee=w[Se];Fe!==null&&Ee!==void 0&&Ee.update(Fe,ee,c||a)}Ve&&Ve($,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),p=null}const dt=new Ag;dt.setAnimationLoop(ut),this.setAnimationLoop=function($){Ve=$},this.dispose=function(){}}}const is=new bn,Vw=new ze;function Hw(s,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Lm(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,x,y,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,b)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,x,y):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===en&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===en&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const x=e.get(m),y=x.envMap,b=x.envMapRotation;y&&(g.envMap.value=y,is.copy(b),is.x*=-1,is.y*=-1,is.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),g.envMapRotation.value.setFromMatrix4(Vw.makeRotationFromEuler(is)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,x,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=y*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,x){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===en&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const x=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ww(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const b=y.program;n.uniformBlockBinding(x,b)}function c(x,y){let b=i[x.id];b===void 0&&(p(x),b=h(x),i[x.id]=b,x.addEventListener("dispose",g));const w=y.program;n.updateUBOMapping(x,w);const T=e.render.frame;r[x.id]!==T&&(d(x),r[x.id]=T)}function h(x){const y=u();x.__bindingPointIndex=y;const b=s.createBuffer(),w=x.__size,T=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,w,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,b),b}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const y=i[x.id],b=x.uniforms,w=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let T=0,R=b.length;T<R;T++){const P=Array.isArray(b[T])?b[T]:[b[T]];for(let S=0,M=P.length;S<M;S++){const L=P[S];if(f(L,T,S,w)===!0){const F=L.__offset,k=Array.isArray(L.value)?L.value:[L.value];let q=0;for(let V=0;V<k.length;V++){const H=k[V],B=_(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,F+q,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,q),q+=B.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,y,b,w){const T=x.value,R=y+"_"+b;if(w[R]===void 0)return typeof T=="number"||typeof T=="boolean"?w[R]=T:w[R]=T.clone(),!0;{const P=w[R];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return w[R]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function p(x){const y=x.uniforms;let b=0;const w=16;for(let R=0,P=y.length;R<P;R++){const S=Array.isArray(y[R])?y[R]:[y[R]];for(let M=0,L=S.length;M<L;M++){const F=S[M],k=Array.isArray(F.value)?F.value:[F.value];for(let q=0,V=k.length;q<V;q++){const H=k[q],B=_(H),Q=b%w,me=Q%B.boundary,oe=Q+me;b+=me,oe!==0&&w-oe<B.storage&&(b+=w-oe),F.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=b,b+=B.storage}}}const T=b%w;return T>0&&(b+=w-T),x.__size=b,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?he("WebGLRenderer: Texture samplers can not be part of an uniforms group."):he("WebGLRenderer: Unsupported uniform value type.",x),y}function g(x){const y=x.target;y.removeEventListener("dispose",g);const b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function m(){for(const x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:l,update:c,dispose:m}}const Xw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Wn=null;function qw(){return Wn===null&&(Wn=new kn(Xw,16,16,xs,Qn),Wn.name="DFG_LUT",Wn.minFilter=vt,Wn.magFilter=vt,Wn.wrapS=un,Wn.wrapT=un,Wn.generateMipmaps=!1,Wn.needsUpdate=!0),Wn}class Dg{constructor(e={}){const{canvas:t=Cm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=cn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=f,g=new Set([nc,tc,Aa]),m=new Set([cn,Tn,fr,pr,jl,Ql]),x=new Uint32Array(4),y=new Int32Array(4);let b=null,w=null;const T=[],R=[];let P=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=On,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let M=!1;this._outputColorSpace=Ht;let L=0,F=0,k=null,q=-1,V=null;const H=new _t,B=new _t;let Q=null;const me=new ve(0);let oe=0,ue=t.width,Xe=t.height,Ve=1,ut=null,dt=null;const $=new _t(0,0,ue,Xe),ee=new _t(0,0,ue,Xe);let Se=!1;const Fe=new wr;let Ee=!1,Qe=!1;const ft=new ze,qe=new A,K=new _t,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let j=!1;function ge(){return k===null?Ve:1}let I=n;function De(E,U){return t.getContext(E,U)}try{const E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$l}`),t.addEventListener("webglcontextlost",We,!1),t.addEventListener("webglcontextrestored",xt,!1),t.addEventListener("webglcontextcreationerror",lt,!1),I===null){const U="webgl2";if(I=De(U,E),I===null)throw De(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Pe("WebGLRenderer: "+E.message),E}let ye,Oe,re,C,v,N,W,Z,X,Re,ae,Ae,ke,te,de,Ce,Ie,ce,Je,D,xe,se,be,ie;function J(){ye=new YS(I),ye.init(),se=new Lg(I,ye),Oe=new kS(I,ye,e,se),re=new Fw(I,ye),Oe.reversedDepthBuffer&&d&&re.buffers.depth.setReversed(!0),C=new JS(I),v=new bw,N=new Ow(I,ye,re,v,Oe,se,C),W=new GS(S),Z=new qS(S),X=new ev(I),be=new FS(I,X),Re=new $S(I,X,C,be),ae=new jS(I,Re,X,C),Je=new KS(I,Oe,N),Ce=new BS(v),Ae=new vw(S,W,Z,ye,Oe,be,Ce),ke=new Hw(S,v),te=new Mw,de=new Rw(ye),ce=new US(S,W,Z,re,ae,p,l),Ie=new Nw(S,ae,Oe),ie=new Ww(I,C,Oe,re),D=new OS(I,ye,C),xe=new ZS(I,ye,C),C.programs=Ae.programs,S.capabilities=Oe,S.extensions=ye,S.properties=v,S.renderLists=te,S.shadowMap=Ie,S.state=re,S.info=C}J(),_!==cn&&(P=new eM(_,t.width,t.height,i,r));const le=new zw(S,I);this.xr=le,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=ye.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ye.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Ve},this.setPixelRatio=function(E){E!==void 0&&(Ve=E,this.setSize(ue,Xe,!1))},this.getSize=function(E){return E.set(ue,Xe)},this.setSize=function(E,U,z=!0){if(le.isPresenting){he("WebGLRenderer: Can't change size while VR device is presenting.");return}ue=E,Xe=U,t.width=Math.floor(E*Ve),t.height=Math.floor(U*Ve),z===!0&&(t.style.width=E+"px",t.style.height=U+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(ue*Ve,Xe*Ve).floor()},this.setDrawingBufferSize=function(E,U,z){ue=E,Xe=U,Ve=z,t.width=Math.floor(E*z),t.height=Math.floor(U*z),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(_===cn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(H)},this.getViewport=function(E){return E.copy($)},this.setViewport=function(E,U,z,G){E.isVector4?$.set(E.x,E.y,E.z,E.w):$.set(E,U,z,G),re.viewport(H.copy($).multiplyScalar(Ve).round())},this.getScissor=function(E){return E.copy(ee)},this.setScissor=function(E,U,z,G){E.isVector4?ee.set(E.x,E.y,E.z,E.w):ee.set(E,U,z,G),re.scissor(B.copy(ee).multiplyScalar(Ve).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(E){re.setScissorTest(Se=E)},this.setOpaqueSort=function(E){ut=E},this.setTransparentSort=function(E){dt=E},this.getClearColor=function(E){return E.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,z=!0){let G=0;if(E){let O=!1;if(k!==null){const fe=k.texture.format;O=g.has(fe)}if(O){const fe=k.texture.type,Me=m.has(fe),_e=ce.getClearColor(),Te=ce.getClearAlpha(),Le=_e.r,Ge=_e.g,Ne=_e.b;Me?(x[0]=Le,x[1]=Ge,x[2]=Ne,x[3]=Te,I.clearBufferuiv(I.COLOR,0,x)):(y[0]=Le,y[1]=Ge,y[2]=Ne,y[3]=Te,I.clearBufferiv(I.COLOR,0,y))}else G|=I.COLOR_BUFFER_BIT}U&&(G|=I.DEPTH_BUFFER_BIT),z&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",We,!1),t.removeEventListener("webglcontextrestored",xt,!1),t.removeEventListener("webglcontextcreationerror",lt,!1),ce.dispose(),te.dispose(),de.dispose(),v.dispose(),W.dispose(),Z.dispose(),ae.dispose(),be.dispose(),ie.dispose(),Ae.dispose(),le.dispose(),le.removeEventListener("sessionstart",Ed),le.removeEventListener("sessionend",Td),Vi.stop()};function We(E){E.preventDefault(),_a("WebGLRenderer: Context Lost."),M=!0}function xt(){_a("WebGLRenderer: Context Restored."),M=!1;const E=C.autoReset,U=Ie.enabled,z=Ie.autoUpdate,G=Ie.needsUpdate,O=Ie.type;J(),C.autoReset=E,Ie.enabled=U,Ie.autoUpdate=z,Ie.needsUpdate=G,Ie.type=O}function lt(E){Pe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function zn(E){const U=E.target;U.removeEventListener("dispose",zn),si(U)}function si(E){a0(E),v.remove(E)}function a0(E){const U=v.get(E).programs;U!==void 0&&(U.forEach(function(z){Ae.releaseProgram(z)}),E.isShaderMaterial&&Ae.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,z,G,O,fe){U===null&&(U=ne);const Me=O.isMesh&&O.matrixWorld.determinant()<0,_e=l0(E,U,z,G,O);re.setMaterial(G,Me);let Te=z.index,Le=1;if(G.wireframe===!0){if(Te=Re.getWireframeAttribute(z),Te===void 0)return;Le=2}const Ge=z.drawRange,Ne=z.attributes.position;let Ke=Ge.start*Le,pt=(Ge.start+Ge.count)*Le;fe!==null&&(Ke=Math.max(Ke,fe.start*Le),pt=Math.min(pt,(fe.start+fe.count)*Le)),Te!==null?(Ke=Math.max(Ke,0),pt=Math.min(pt,Te.count)):Ne!=null&&(Ke=Math.max(Ke,0),pt=Math.min(pt,Ne.count));const wt=pt-Ke;if(wt<0||wt===1/0)return;be.setup(O,G,_e,z,Te);let Et,gt=D;if(Te!==null&&(Et=X.get(Te),gt=xe,gt.setIndex(Et)),O.isMesh)G.wireframe===!0?(re.setLineWidth(G.wireframeLinewidth*ge()),gt.setMode(I.LINES)):gt.setMode(I.TRIANGLES);else if(O.isLine){let Ue=G.linewidth;Ue===void 0&&(Ue=1),re.setLineWidth(Ue*ge()),O.isLineSegments?gt.setMode(I.LINES):O.isLineLoop?gt.setMode(I.LINE_LOOP):gt.setMode(I.LINE_STRIP)}else O.isPoints?gt.setMode(I.POINTS):O.isSprite&&gt.setMode(I.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)gr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))gt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ue=O._multiDrawStarts,ct=O._multiDrawCounts,rt=O._multiDrawCount,fn=Te?X.get(Te).bytesPerElement:1,Cs=v.get(G).currentProgram.getUniforms();for(let pn=0;pn<rt;pn++)Cs.setValue(I,"_gl_DrawID",pn),gt.render(Ue[pn]/fn,ct[pn])}else if(O.isInstancedMesh)gt.renderInstances(Ke,wt,O.count);else if(z.isInstancedBufferGeometry){const Ue=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ct=Math.min(z.instanceCount,Ue);gt.renderInstances(Ke,wt,ct)}else gt.render(Ke,wt)};function wd(E,U,z){E.transparent===!0&&E.side===En&&E.forceSinglePass===!1?(E.side=en,E.needsUpdate=!0,Ha(E,U,z),E.side=Kn,E.needsUpdate=!0,Ha(E,U,z),E.side=En):Ha(E,U,z)}this.compile=function(E,U,z=null){z===null&&(z=E),w=de.get(z),w.init(U),R.push(w),z.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(w.pushLight(O),O.castShadow&&w.pushShadow(O))}),E!==z&&E.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(w.pushLight(O),O.castShadow&&w.pushShadow(O))}),w.setupLights();const G=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const fe=O.material;if(fe)if(Array.isArray(fe))for(let Me=0;Me<fe.length;Me++){const _e=fe[Me];wd(_e,z,O),G.add(_e)}else wd(fe,z,O),G.add(fe)}),w=R.pop(),G},this.compileAsync=function(E,U,z=null){const G=this.compile(E,U,z);return new Promise(O=>{function fe(){if(G.forEach(function(Me){v.get(Me).currentProgram.isReady()&&G.delete(Me)}),G.size===0){O(E);return}setTimeout(fe,10)}ye.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Uc=null;function o0(E){Uc&&Uc(E)}function Ed(){Vi.stop()}function Td(){Vi.start()}const Vi=new Ag;Vi.setAnimationLoop(o0),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(E){Uc=E,le.setAnimationLoop(E),E===null?Vi.stop():Vi.start()},le.addEventListener("sessionstart",Ed),le.addEventListener("sessionend",Td),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){Pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;const z=le.enabled===!0&&le.isPresenting===!0,G=P!==null&&(k===null||z)&&P.begin(S,k);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(U),U=le.getCamera()),E.isScene===!0&&E.onBeforeRender(S,E,U,k),w=de.get(E,R.length),w.init(U),R.push(w),ft.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Fe.setFromProjectionMatrix(ft,xn,U.reversedDepth),Qe=this.localClippingEnabled,Ee=Ce.init(this.clippingPlanes,Qe),b=te.get(E,T.length),b.init(),T.push(b),le.enabled===!0&&le.isPresenting===!0){const Me=S.xr.getDepthSensingMesh();Me!==null&&Fc(Me,U,-1/0,S.sortObjects)}Fc(E,U,0,S.sortObjects),b.finish(),S.sortObjects===!0&&b.sort(ut,dt),j=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,j&&ce.addToRenderList(b,E),this.info.render.frame++,Ee===!0&&Ce.beginShadows();const O=w.state.shadowsArray;if(Ie.render(O,E,U),Ee===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&P.hasRenderPass())===!1){const Me=b.opaque,_e=b.transmissive;if(w.setupLights(),U.isArrayCamera){const Te=U.cameras;if(_e.length>0)for(let Le=0,Ge=Te.length;Le<Ge;Le++){const Ne=Te[Le];Cd(Me,_e,E,Ne)}j&&ce.render(E);for(let Le=0,Ge=Te.length;Le<Ge;Le++){const Ne=Te[Le];Ad(b,E,Ne,Ne.viewport)}}else _e.length>0&&Cd(Me,_e,E,U),j&&ce.render(E),Ad(b,E,U)}k!==null&&F===0&&(N.updateMultisampleRenderTarget(k),N.updateRenderTargetMipmap(k)),G&&P.end(S),E.isScene===!0&&E.onAfterRender(S,E,U),be.resetDefaultState(),q=-1,V=null,R.pop(),R.length>0?(w=R[R.length-1],Ee===!0&&Ce.setGlobalState(S.clippingPlanes,w.state.camera)):w=null,T.pop(),T.length>0?b=T[T.length-1]:b=null};function Fc(E,U,z,G){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Fe.intersectsSprite(E)){G&&K.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ft);const Me=ae.update(E),_e=E.material;_e.visible&&b.push(E,Me,_e,z,K.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Fe.intersectsObject(E))){const Me=ae.update(E),_e=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),K.copy(E.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),K.copy(Me.boundingSphere.center)),K.applyMatrix4(E.matrixWorld).applyMatrix4(ft)),Array.isArray(_e)){const Te=Me.groups;for(let Le=0,Ge=Te.length;Le<Ge;Le++){const Ne=Te[Le],Ke=_e[Ne.materialIndex];Ke&&Ke.visible&&b.push(E,Me,Ke,z,K.z,Ne)}}else _e.visible&&b.push(E,Me,_e,z,K.z,null)}}const fe=E.children;for(let Me=0,_e=fe.length;Me<_e;Me++)Fc(fe[Me],U,z,G)}function Ad(E,U,z,G){const{opaque:O,transmissive:fe,transparent:Me}=E;w.setupLightsView(z),Ee===!0&&Ce.setGlobalState(S.clippingPlanes,z),G&&re.viewport(H.copy(G)),O.length>0&&Va(O,U,z),fe.length>0&&Va(fe,U,z),Me.length>0&&Va(Me,U,z),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function Cd(E,U,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[G.id]===void 0){const Ke=ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[G.id]=new vn(1,1,{generateMipmaps:!0,type:Ke?Qn:cn,minFilter:$n,samples:Oe.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace})}const fe=w.state.transmissionRenderTarget[G.id],Me=G.viewport||H;fe.setSize(Me.z*S.transmissionResolutionScale,Me.w*S.transmissionResolutionScale);const _e=S.getRenderTarget(),Te=S.getActiveCubeFace(),Le=S.getActiveMipmapLevel();S.setRenderTarget(fe),S.getClearColor(me),oe=S.getClearAlpha(),oe<1&&S.setClearColor(16777215,.5),S.clear(),j&&ce.render(z);const Ge=S.toneMapping;S.toneMapping=On;const Ne=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),w.setupLightsView(G),Ee===!0&&Ce.setGlobalState(S.clippingPlanes,G),Va(E,z,G),N.updateMultisampleRenderTarget(fe),N.updateRenderTargetMipmap(fe),ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let pt=0,wt=U.length;pt<wt;pt++){const Et=U[pt],{object:gt,geometry:Ue,material:ct,group:rt}=Et;if(ct.side===En&&gt.layers.test(G.layers)){const fn=ct.side;ct.side=en,ct.needsUpdate=!0,Rd(gt,z,G,Ue,ct,rt),ct.side=fn,ct.needsUpdate=!0,Ke=!0}}Ke===!0&&(N.updateMultisampleRenderTarget(fe),N.updateRenderTargetMipmap(fe))}S.setRenderTarget(_e,Te,Le),S.setClearColor(me,oe),Ne!==void 0&&(G.viewport=Ne),S.toneMapping=Ge}function Va(E,U,z){const G=U.isScene===!0?U.overrideMaterial:null;for(let O=0,fe=E.length;O<fe;O++){const Me=E[O],{object:_e,geometry:Te,group:Le}=Me;let Ge=Me.material;Ge.allowOverride===!0&&G!==null&&(Ge=G),_e.layers.test(z.layers)&&Rd(_e,U,z,Te,Ge,Le)}}function Rd(E,U,z,G,O,fe){E.onBeforeRender(S,U,z,G,O,fe),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(S,U,z,G,E,fe),O.transparent===!0&&O.side===En&&O.forceSinglePass===!1?(O.side=en,O.needsUpdate=!0,S.renderBufferDirect(z,U,G,O,E,fe),O.side=Kn,O.needsUpdate=!0,S.renderBufferDirect(z,U,G,O,E,fe),O.side=En):S.renderBufferDirect(z,U,G,O,E,fe),E.onAfterRender(S,U,z,G,O,fe)}function Ha(E,U,z){U.isScene!==!0&&(U=ne);const G=v.get(E),O=w.state.lights,fe=w.state.shadowsArray,Me=O.state.version,_e=Ae.getParameters(E,O.state,fe,U,z),Te=Ae.getProgramCacheKey(_e);let Le=G.programs;G.environment=E.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(E.isMeshStandardMaterial?Z:W).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Le===void 0&&(E.addEventListener("dispose",zn),Le=new Map,G.programs=Le);let Ge=Le.get(Te);if(Ge!==void 0){if(G.currentProgram===Ge&&G.lightsStateVersion===Me)return Pd(E,_e),Ge}else _e.uniforms=Ae.getUniforms(E),E.onBeforeCompile(_e,S),Ge=Ae.acquireProgram(_e,Te),Le.set(Te,Ge),G.uniforms=_e.uniforms;const Ne=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ne.clippingPlanes=Ce.uniform),Pd(E,_e),G.needsLights=h0(E),G.lightsStateVersion=Me,G.needsLights&&(Ne.ambientLightColor.value=O.state.ambient,Ne.lightProbe.value=O.state.probe,Ne.directionalLights.value=O.state.directional,Ne.directionalLightShadows.value=O.state.directionalShadow,Ne.spotLights.value=O.state.spot,Ne.spotLightShadows.value=O.state.spotShadow,Ne.rectAreaLights.value=O.state.rectArea,Ne.ltc_1.value=O.state.rectAreaLTC1,Ne.ltc_2.value=O.state.rectAreaLTC2,Ne.pointLights.value=O.state.point,Ne.pointLightShadows.value=O.state.pointShadow,Ne.hemisphereLights.value=O.state.hemi,Ne.directionalShadowMap.value=O.state.directionalShadowMap,Ne.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ne.spotShadowMap.value=O.state.spotShadowMap,Ne.spotLightMatrix.value=O.state.spotLightMatrix,Ne.spotLightMap.value=O.state.spotLightMap,Ne.pointShadowMap.value=O.state.pointShadowMap,Ne.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=Ge,G.uniformsList=null,Ge}function Id(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Ho.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Pd(E,U){const z=v.get(E);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function l0(E,U,z,G,O){U.isScene!==!0&&(U=ne),N.resetTextureUnits();const fe=U.fog,Me=G.isMeshStandardMaterial?U.environment:null,_e=k===null?S.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:ys,Te=(G.isMeshStandardMaterial?Z:W).get(G.envMap||Me),Le=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ge=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ne=!!z.morphAttributes.position,Ke=!!z.morphAttributes.normal,pt=!!z.morphAttributes.color;let wt=On;G.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(wt=S.toneMapping);const Et=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,gt=Et!==void 0?Et.length:0,Ue=v.get(G),ct=w.state.lights;if(Ee===!0&&(Qe===!0||E!==V)){const qt=E===V&&G.id===q;Ce.setState(G,E,qt)}let rt=!1;G.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==ct.state.version||Ue.outputColorSpace!==_e||O.isBatchedMesh&&Ue.batching===!1||!O.isBatchedMesh&&Ue.batching===!0||O.isBatchedMesh&&Ue.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ue.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ue.instancing===!1||!O.isInstancedMesh&&Ue.instancing===!0||O.isSkinnedMesh&&Ue.skinning===!1||!O.isSkinnedMesh&&Ue.skinning===!0||O.isInstancedMesh&&Ue.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ue.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ue.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ue.instancingMorph===!1&&O.morphTexture!==null||Ue.envMap!==Te||G.fog===!0&&Ue.fog!==fe||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==Ce.numPlanes||Ue.numIntersection!==Ce.numIntersection)||Ue.vertexAlphas!==Le||Ue.vertexTangents!==Ge||Ue.morphTargets!==Ne||Ue.morphNormals!==Ke||Ue.morphColors!==pt||Ue.toneMapping!==wt||Ue.morphTargetsCount!==gt)&&(rt=!0):(rt=!0,Ue.__version=G.version);let fn=Ue.currentProgram;rt===!0&&(fn=Ha(G,U,O));let Cs=!1,pn=!1,Ar=!1;const yt=fn.getUniforms(),nn=Ue.uniforms;if(re.useProgram(fn.program)&&(Cs=!0,pn=!0,Ar=!0),G.id!==q&&(q=G.id,pn=!0),Cs||V!==E){re.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),yt.setValue(I,"projectionMatrix",E.projectionMatrix),yt.setValue(I,"viewMatrix",E.matrixWorldInverse);const sn=yt.map.cameraPosition;sn!==void 0&&sn.setValue(I,qe.setFromMatrixPosition(E.matrixWorld)),Oe.logarithmicDepthBuffer&&yt.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&yt.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),V!==E&&(V=E,pn=!0,Ar=!0)}if(Ue.needsLights&&(ct.state.directionalShadowMap.length>0&&yt.setValue(I,"directionalShadowMap",ct.state.directionalShadowMap,N),ct.state.spotShadowMap.length>0&&yt.setValue(I,"spotShadowMap",ct.state.spotShadowMap,N),ct.state.pointShadowMap.length>0&&yt.setValue(I,"pointShadowMap",ct.state.pointShadowMap,N)),O.isSkinnedMesh){yt.setOptional(I,O,"bindMatrix"),yt.setOptional(I,O,"bindMatrixInverse");const qt=O.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),yt.setValue(I,"boneTexture",qt.boneTexture,N))}O.isBatchedMesh&&(yt.setOptional(I,O,"batchingTexture"),yt.setValue(I,"batchingTexture",O._matricesTexture,N),yt.setOptional(I,O,"batchingIdTexture"),yt.setValue(I,"batchingIdTexture",O._indirectTexture,N),yt.setOptional(I,O,"batchingColorTexture"),O._colorsTexture!==null&&yt.setValue(I,"batchingColorTexture",O._colorsTexture,N));const Sn=z.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&Je.update(O,z,fn),(pn||Ue.receiveShadow!==O.receiveShadow)&&(Ue.receiveShadow=O.receiveShadow,yt.setValue(I,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(nn.envMap.value=Te,nn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(nn.envMapIntensity.value=U.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=qw()),pn&&(yt.setValue(I,"toneMappingExposure",S.toneMappingExposure),Ue.needsLights&&c0(nn,Ar),fe&&G.fog===!0&&ke.refreshFogUniforms(nn,fe),ke.refreshMaterialUniforms(nn,G,Ve,Xe,w.state.transmissionRenderTarget[E.id]),Ho.upload(I,Id(Ue),nn,N)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ho.upload(I,Id(Ue),nn,N),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&yt.setValue(I,"center",O.center),yt.setValue(I,"modelViewMatrix",O.modelViewMatrix),yt.setValue(I,"normalMatrix",O.normalMatrix),yt.setValue(I,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const qt=G.uniformsGroups;for(let sn=0,Oc=qt.length;sn<Oc;sn++){const Hi=qt[sn];ie.update(Hi,fn),ie.bind(Hi,fn)}}return fn}function c0(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function h0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(E,U,z){const G=v.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),v.get(E.texture).__webglTexture=U,v.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:z,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){const z=v.get(E);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const u0=I.createFramebuffer();this.setRenderTarget=function(E,U=0,z=0){k=E,L=U,F=z;let G=null,O=!1,fe=!1;if(E){const _e=v.get(E);if(_e.__useDefaultFramebuffer!==void 0){re.bindFramebuffer(I.FRAMEBUFFER,_e.__webglFramebuffer),H.copy(E.viewport),B.copy(E.scissor),Q=E.scissorTest,re.viewport(H),re.scissor(B),re.setScissorTest(Q),q=-1;return}else if(_e.__webglFramebuffer===void 0)N.setupRenderTarget(E);else if(_e.__hasExternalTextures)N.rebindTextures(E,v.get(E.texture).__webglTexture,v.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ge=E.depthTexture;if(_e.__boundDepthTexture!==Ge){if(Ge!==null&&v.has(Ge)&&(E.width!==Ge.image.width||E.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(E)}}const Te=E.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(fe=!0);const Le=v.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Le[U])?G=Le[U][z]:G=Le[U],O=!0):E.samples>0&&N.useMultisampledRTT(E)===!1?G=v.get(E).__webglMultisampledFramebuffer:Array.isArray(Le)?G=Le[z]:G=Le,H.copy(E.viewport),B.copy(E.scissor),Q=E.scissorTest}else H.copy($).multiplyScalar(Ve).floor(),B.copy(ee).multiplyScalar(Ve).floor(),Q=Se;if(z!==0&&(G=u0),re.bindFramebuffer(I.FRAMEBUFFER,G)&&re.drawBuffers(E,G),re.viewport(H),re.scissor(B),re.setScissorTest(Q),O){const _e=v.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,_e.__webglTexture,z)}else if(fe){const _e=U;for(let Te=0;Te<E.textures.length;Te++){const Le=v.get(E.textures[Te]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Te,Le.__webglTexture,z,_e)}}else if(E!==null&&z!==0){const _e=v.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,_e.__webglTexture,z)}q=-1},this.readRenderTargetPixels=function(E,U,z,G,O,fe,Me,_e=0){if(!(E&&E.isWebGLRenderTarget)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=v.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){re.bindFramebuffer(I.FRAMEBUFFER,Te);try{const Le=E.textures[_e],Ge=Le.format,Ne=Le.type;if(!Oe.textureFormatReadable(Ge)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(Ne)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-G&&z>=0&&z<=E.height-O&&(E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+_e),I.readPixels(U,z,G,O,se.convert(Ge),se.convert(Ne),fe))}finally{const Le=k!==null?v.get(k).__webglFramebuffer:null;re.bindFramebuffer(I.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(E,U,z,G,O,fe,Me,_e=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=v.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te)if(U>=0&&U<=E.width-G&&z>=0&&z<=E.height-O){re.bindFramebuffer(I.FRAMEBUFFER,Te);const Le=E.textures[_e],Ge=Le.format,Ne=Le.type;if(!Oe.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ke),I.bufferData(I.PIXEL_PACK_BUFFER,fe.byteLength,I.STREAM_READ),E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+_e),I.readPixels(U,z,G,O,se.convert(Ge),se.convert(Ne),0);const pt=k!==null?v.get(k).__webglFramebuffer:null;re.bindFramebuffer(I.FRAMEBUFFER,pt);const wt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await r_(I,wt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ke),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,fe),I.deleteBuffer(Ke),I.deleteSync(wt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,z=0){const G=Math.pow(2,-z),O=Math.floor(E.image.width*G),fe=Math.floor(E.image.height*G),Me=U!==null?U.x:0,_e=U!==null?U.y:0;N.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,z,0,0,Me,_e,O,fe),re.unbindTexture()};const d0=I.createFramebuffer(),f0=I.createFramebuffer();this.copyTextureToTexture=function(E,U,z=null,G=null,O=0,fe=null){fe===null&&(O!==0?(gr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),fe=O,O=0):fe=0);let Me,_e,Te,Le,Ge,Ne,Ke,pt,wt;const Et=E.isCompressedTexture?E.mipmaps[fe]:E.image;if(z!==null)Me=z.max.x-z.min.x,_e=z.max.y-z.min.y,Te=z.isBox3?z.max.z-z.min.z:1,Le=z.min.x,Ge=z.min.y,Ne=z.isBox3?z.min.z:0;else{const Sn=Math.pow(2,-O);Me=Math.floor(Et.width*Sn),_e=Math.floor(Et.height*Sn),E.isDataArrayTexture?Te=Et.depth:E.isData3DTexture?Te=Math.floor(Et.depth*Sn):Te=1,Le=0,Ge=0,Ne=0}G!==null?(Ke=G.x,pt=G.y,wt=G.z):(Ke=0,pt=0,wt=0);const gt=se.convert(U.format),Ue=se.convert(U.type);let ct;U.isData3DTexture?(N.setTexture3D(U,0),ct=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(N.setTexture2DArray(U,0),ct=I.TEXTURE_2D_ARRAY):(N.setTexture2D(U,0),ct=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const rt=I.getParameter(I.UNPACK_ROW_LENGTH),fn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Cs=I.getParameter(I.UNPACK_SKIP_PIXELS),pn=I.getParameter(I.UNPACK_SKIP_ROWS),Ar=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Et.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Et.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Le),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ge),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ne);const yt=E.isDataArrayTexture||E.isData3DTexture,nn=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const Sn=v.get(E),qt=v.get(U),sn=v.get(Sn.__renderTarget),Oc=v.get(qt.__renderTarget);re.bindFramebuffer(I.READ_FRAMEBUFFER,sn.__webglFramebuffer),re.bindFramebuffer(I.DRAW_FRAMEBUFFER,Oc.__webglFramebuffer);for(let Hi=0;Hi<Te;Hi++)yt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,v.get(E).__webglTexture,O,Ne+Hi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,v.get(U).__webglTexture,fe,wt+Hi)),I.blitFramebuffer(Le,Ge,Me,_e,Ke,pt,Me,_e,I.DEPTH_BUFFER_BIT,I.NEAREST);re.bindFramebuffer(I.READ_FRAMEBUFFER,null),re.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(O!==0||E.isRenderTargetTexture||v.has(E)){const Sn=v.get(E),qt=v.get(U);re.bindFramebuffer(I.READ_FRAMEBUFFER,d0),re.bindFramebuffer(I.DRAW_FRAMEBUFFER,f0);for(let sn=0;sn<Te;sn++)yt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Sn.__webglTexture,O,Ne+sn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Sn.__webglTexture,O),nn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,qt.__webglTexture,fe,wt+sn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,qt.__webglTexture,fe),O!==0?I.blitFramebuffer(Le,Ge,Me,_e,Ke,pt,Me,_e,I.COLOR_BUFFER_BIT,I.NEAREST):nn?I.copyTexSubImage3D(ct,fe,Ke,pt,wt+sn,Le,Ge,Me,_e):I.copyTexSubImage2D(ct,fe,Ke,pt,Le,Ge,Me,_e);re.bindFramebuffer(I.READ_FRAMEBUFFER,null),re.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else nn?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(ct,fe,Ke,pt,wt,Me,_e,Te,gt,Ue,Et.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(ct,fe,Ke,pt,wt,Me,_e,Te,gt,Et.data):I.texSubImage3D(ct,fe,Ke,pt,wt,Me,_e,Te,gt,Ue,Et):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,fe,Ke,pt,Me,_e,gt,Ue,Et.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,fe,Ke,pt,Et.width,Et.height,gt,Et.data):I.texSubImage2D(I.TEXTURE_2D,fe,Ke,pt,Me,_e,gt,Ue,Et);I.pixelStorei(I.UNPACK_ROW_LENGTH,rt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,fn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Cs),I.pixelStorei(I.UNPACK_SKIP_ROWS,pn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ar),fe===0&&U.generateMipmaps&&I.generateMipmap(ct),re.unbindTexture()},this.initRenderTarget=function(E){v.get(E).__webglFramebuffer===void 0&&N.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?N.setTextureCube(E,0):E.isData3DTexture?N.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?N.setTexture2DArray(E,0):N.setTexture2D(E,0),re.unbindTexture()},this.resetState=function(){L=0,F=0,k=null,re.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}const Yw=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Zl,AddEquation:Pi,AddOperation:fm,AdditiveAnimationBlendMode:Du,AdditiveBlending:jo,AgXToneMapping:wu,AlphaFormat:Pu,AlwaysCompare:Em,AlwaysDepth:nl,AlwaysStencilFunc:zh,AmbientLight:id,AnimationAction:Mg,AnimationClip:Ma,AnimationLoader:Yx,AnimationMixer:by,AnimationObjectGroup:yy,AnimationUtils:Hx,ArcCurve:Wm,ArrayCamera:vg,ArrowHelper:qy,AttachedBindMode:Gh,Audio:bg,AudioAnalyser:cy,AudioContext:rd,AudioListener:ay,AudioLoader:iy,AxesHelper:Yy,BackSide:en,BasicDepthPacking:xm,BasicShadowMap:m0,BatchedMesh:Bm,Bone:Gu,BooleanKeyframeTrack:Es,Box2:Iy,Box3:Bt,Box3Helper:Wy,BoxGeometry:ws,BoxHelper:Hy,BufferAttribute:tt,BufferGeometry:He,BufferGeometryLoader:yg,ByteType:Au,Cache:Zn,Camera:cc,CameraHelper:Vy,CanvasTexture:Pa,CapsuleGeometry:_c,CatmullRomCurve3:Xm,CineonToneMapping:Su,CircleGeometry:xc,ClampToEdgeWrapping:un,Clock:ad,Color:ve,ColorKeyframeTrack:Qu,ColorManagement:je,CompressedArrayTexture:ux,CompressedCubeTexture:dx,CompressedTexture:gc,CompressedTextureLoader:$x,ConeGeometry:Da,ConstantAlphaFactor:hm,ConstantColorFactor:lm,Controls:Tg,CubeCamera:Nm,CubeDepthTexture:Vm,CubeReflectionMapping:jn,CubeRefractionMapping:Fi,CubeTexture:Ca,CubeTextureLoader:Zx,CubeUVReflectionMapping:Sr,CubicBezierCurve:Hu,CubicBezierCurve3:qm,CubicInterpolant:cg,CullFaceBack:Oh,CullFaceFront:qp,CullFaceFrontBack:p0,CullFaceNone:Xp,Curve:Gn,CurvePath:$m,CustomBlending:$p,CustomToneMapping:Mu,CylinderGeometry:La,Cylindrical:Ry,Data3DTexture:oc,DataArrayTexture:ac,DataTexture:kn,DataTextureLoader:Jx,DataUtils:F_,DecrementStencilOp:D0,DecrementWrapStencilOp:U0,DefaultLoadingManager:dg,DepthFormat:ei,DepthStencilFormat:Di,DepthTexture:vr,DetachedBindMode:pm,DirectionalLight:nd,DirectionalLightHelper:zy,DiscreteInterpolant:hg,DodecahedronGeometry:yc,DoubleSide:En,DstAlphaFactor:im,DstColorFactor:rm,DynamicCopyUsage:J0,DynamicDrawUsage:W0,DynamicReadUsage:Y0,EdgesGeometry:Hm,EllipseCurve:vc,EqualCompare:Sm,EqualDepth:sl,EqualStencilFunc:B0,EquirectangularReflectionMapping:ca,EquirectangularRefractionMapping:ha,Euler:bn,EventDispatcher:ti,ExternalTexture:zu,ExtrudeGeometry:bc,FileLoader:Si,Float16BufferAttribute:H_,Float32BufferAttribute:we,FloatType:Kt,Fog:uc,FogExp2:hc,FramebufferTexture:hx,FrontSide:Kn,Frustum:wr,FrustumArray:pc,GLBufferAttribute:Ty,GLSL1:j0,GLSL3:Vh,GreaterCompare:Mm,GreaterDepth:al,GreaterEqualCompare:rc,GreaterEqualDepth:rl,GreaterEqualStencilFunc:H0,GreaterStencilFunc:z0,GridHelper:By,Group:rr,HalfFloatType:Qn,HemisphereLight:fg,HemisphereLightHelper:ky,IcosahedronGeometry:Sc,ImageBitmapLoader:ny,ImageLoader:wa,ImageUtils:Im,IncrementStencilOp:L0,IncrementWrapStencilOp:N0,InstancedBufferAttribute:yr,InstancedBufferGeometry:xg,InstancedInterleavedBuffer:Ey,InstancedMesh:km,Int16BufferAttribute:z_,Int32BufferAttribute:V_,Int8BufferAttribute:k_,IntType:Kl,InterleavedBuffer:dc,InterleavedBufferAttribute:vs,Interpolant:Oa,InterpolateDiscrete:da,InterpolateLinear:Gl,InterpolateSmooth:zo,InterpolationSamplingMode:t_,InterpolationSamplingType:e_,InvertStencilOp:F0,KeepStencilOp:ss,KeyframeTrack:Cn,LOD:Fm,LatheGeometry:Mc,Layers:lc,LessCompare:bm,LessDepth:il,LessEqualCompare:sc,LessEqualDepth:_s,LessEqualStencilFunc:G0,LessStencilFunc:k0,Light:zi,LightProbe:_g,Line:ki,Line3:Dy,LineBasicMaterial:tn,LineCurve:Wu,LineCurve3:Ym,LineDashedMaterial:og,LineLoop:Gm,LineSegments:ni,LinearFilter:vt,LinearInterpolant:ju,LinearMipMapLinearFilter:y0,LinearMipMapNearestFilter:x0,LinearMipmapLinearFilter:$n,LinearMipmapNearestFilter:jr,LinearSRGBColorSpace:ys,LinearToneMapping:vu,LinearTransfer:pa,Loader:dn,LoaderUtils:Yh,LoadingManager:ed,LoopOnce:mm,LoopPingPong:_m,LoopRepeat:gm,MOUSE:yi,Material:Xt,MaterialLoader:Ic,MathUtils:Rm,Matrix2:hd,Matrix3:Ye,Matrix4:ze,MaxEquation:jp,Mesh:bt,MeshBasicMaterial:Bn,MeshDepthMaterial:Zu,MeshDistanceMaterial:Ju,MeshLambertMaterial:rg,MeshMatcapMaterial:ag,MeshNormalMaterial:sg,MeshPhongMaterial:ng,MeshPhysicalMaterial:tg,MeshStandardMaterial:Fa,MeshToonMaterial:ig,MinEquation:Kp,MirroredRepeatWrapping:ua,MixOperation:dm,MultiplyBlending:Bh,MultiplyOperation:Ta,NearestFilter:et,NearestMipMapLinearFilter:_0,NearestMipMapNearestFilter:g0,NearestMipmapLinearFilter:ir,NearestMipmapNearestFilter:Tu,NeutralToneMapping:Eu,NeverCompare:vm,NeverDepth:tl,NeverStencilFunc:O0,NoBlending:Jn,NoColorSpace:fi,NoNormalPacking:A0,NoToneMapping:On,NormalAnimationBlendMode:ic,NormalBlending:fs,NormalGAPacking:R0,NormalRGPacking:C0,NotEqualCompare:wm,NotEqualDepth:ol,NotEqualStencilFunc:V0,NumberKeyframeTrack:ba,Object3D:st,ObjectLoader:ey,ObjectSpaceNormalMap:ym,OctahedronGeometry:Na,OneFactor:em,OneMinusConstantAlphaFactor:um,OneMinusConstantColorFactor:cm,OneMinusDstAlphaFactor:sm,OneMinusDstColorFactor:am,OneMinusSrcAlphaFactor:el,OneMinusSrcColorFactor:nm,OrthographicCamera:Er,PCFShadowMap:Kr,PCFSoftShadowMap:Yp,PMREMGenerator:Kh,Path:Wl,PerspectiveCamera:kt,Plane:ui,PlaneGeometry:ii,PlaneHelper:Xy,PointLight:mg,PointLightHelper:Fy,Points:mc,PointsMaterial:Ia,PolarGridHelper:Gy,PolyhedronGeometry:Gi,PositionalAudio:ly,PropertyBinding:it,PropertyMixer:Sg,QuadraticBezierCurve:Xu,QuadraticBezierCurve3:qu,Quaternion:Wt,QuaternionKeyframeTrack:ka,QuaternionLinearInterpolant:ug,R11_EAC_Format:ml,RED_GREEN_RGTC2_Format:kl,RED_RGTC1_Format:Fl,REVISION:$l,RG11_EAC_Format:_l,RGBADepthPacking:w0,RGBAFormat:jt,RGBAIntegerFormat:nc,RGBA_ASTC_10x10_Format:Il,RGBA_ASTC_10x5_Format:Al,RGBA_ASTC_10x6_Format:Cl,RGBA_ASTC_10x8_Format:Rl,RGBA_ASTC_12x10_Format:Pl,RGBA_ASTC_12x12_Format:Ll,RGBA_ASTC_4x4_Format:yl,RGBA_ASTC_5x4_Format:vl,RGBA_ASTC_5x5_Format:bl,RGBA_ASTC_6x5_Format:Sl,RGBA_ASTC_6x6_Format:Ml,RGBA_ASTC_8x5_Format:wl,RGBA_ASTC_8x6_Format:El,RGBA_ASTC_8x8_Format:Tl,RGBA_BPTC_Format:Dl,RGBA_ETC2_EAC_Format:pl,RGBA_PVRTC_2BPPV1_Format:ul,RGBA_PVRTC_4BPPV1_Format:hl,RGBA_S3TC_DXT1_Format:ea,RGBA_S3TC_DXT3_Format:ta,RGBA_S3TC_DXT5_Format:na,RGBDepthPacking:E0,RGBFormat:Lu,RGBIntegerFormat:v0,RGB_BPTC_SIGNED_Format:Nl,RGB_BPTC_UNSIGNED_Format:Ul,RGB_ETC1_Format:dl,RGB_ETC2_Format:fl,RGB_PVRTC_2BPPV1_Format:cl,RGB_PVRTC_4BPPV1_Format:ll,RGB_S3TC_DXT1_Format:Qr,RGDepthPacking:T0,RGFormat:xs,RGIntegerFormat:tc,RawShaderMaterial:$u,Ray:Ms,Raycaster:wg,RectAreaLight:gg,RedFormat:ec,RedIntegerFormat:Aa,ReinhardToneMapping:bu,RenderTarget:Uu,RenderTarget3D:Sy,RepeatWrapping:bi,ReplaceStencilOp:P0,ReverseSubtractEquation:Jp,RingGeometry:wc,SIGNED_R11_EAC_Format:gl,SIGNED_RED_GREEN_RGTC2_Format:Bl,SIGNED_RED_RGTC1_Format:Ol,SIGNED_RG11_EAC_Format:xl,SRGBColorSpace:Ht,SRGBTransfer:ot,Scene:Bu,ShaderChunk:Ze,ShaderLib:Ln,ShaderMaterial:An,ShadowMaterial:eg,Shape:ms,ShapeGeometry:Ec,ShapePath:$y,ShapeUtils:Fn,ShortType:Cu,Skeleton:fc,SkeletonHelper:Uy,SkinnedMesh:Om,Source:Ni,Sphere:Ot,SphereGeometry:Ua,Spherical:Zh,SphericalHarmonics3:sd,SplineCurve:Yu,SpotLight:pg,SpotLightHelper:Ny,Sprite:Ra,SpriteMaterial:Mr,SrcAlphaFactor:Qo,SrcAlphaSaturateFactor:om,SrcColorFactor:tm,StaticCopyUsage:Z0,StaticDrawUsage:ma,StaticReadUsage:q0,StereoCamera:sy,StreamCopyUsage:K0,StreamDrawUsage:X0,StreamReadUsage:$0,StringKeyframeTrack:Ts,SubtractEquation:Zp,SubtractiveBlending:kh,TOUCH:_i,TangentSpaceNormalMap:Bi,TetrahedronGeometry:Tc,Texture:At,TextureLoader:Ba,TextureUtils:Qy,Timer:Ay,TimestampQuery:Q0,TorusGeometry:Ac,TorusKnotGeometry:Cc,Triangle:hn,TriangleFanDrawMode:M0,TriangleStripDrawMode:S0,TrianglesDrawMode:b0,TubeGeometry:Rc,UVMapping:Jl,Uint16BufferAttribute:Fu,Uint32BufferAttribute:Ou,Uint8BufferAttribute:B_,Uint8ClampedBufferAttribute:G_,Uniform:cd,UniformsGroup:wy,UniformsLib:pe,UniformsUtils:Dm,UnsignedByteType:cn,UnsignedInt101111Type:Iu,UnsignedInt248Type:pr,UnsignedInt5999Type:Ru,UnsignedIntType:Tn,UnsignedShort4444Type:jl,UnsignedShort5551Type:Ql,UnsignedShortType:fr,VSMShadowMap:nr,Vector2:Y,Vector3:A,Vector4:_t,VectorKeyframeTrack:Sa,VideoFrameTexture:cx,VideoTexture:zm,WebGL3DRenderTarget:T_,WebGLArrayRenderTarget:E_,WebGLCoordinateSystem:xn,WebGLCubeRenderTarget:ku,WebGLRenderTarget:vn,WebGLRenderer:Dg,WebGLUtils:Lg,WebGPUCoordinateSystem:mr,WebXRController:Vo,WireframeGeometry:Qm,WrapAroundEnding:fa,ZeroCurvatureEnding:cs,ZeroFactor:Qp,ZeroSlopeEnding:hs,ZeroStencilOp:I0,createCanvasElement:Cm,error:Pe,getConsoleFunction:s_,log:_a,setConsoleFunction:i_,warn:he,warnOnce:gr},Symbol.toStringTag,{value:"Module"})),op={type:"change"},ud={type:"start"},Ng={type:"end"},Uo=new Ms,lp=new ui,$w=Math.cos(70*Rm.DEG2RAD),Pt=new A,an=2*Math.PI,mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ah=1e-6;class Zw extends Tg{constructor(e,t=null){super(e,t),this.state=mt.NONE,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yi.ROTATE,MIDDLE:yi.DOLLY,RIGHT:yi.PAN},this.touches={ONE:_i.ROTATE,TWO:_i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new Wt,this._lastTargetPosition=new A,this._quat=new Wt().setFromUnitVectors(e.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Zh,this._sphericalDelta=new Zh,this._scale=1,this._panOffset=new A,this._rotateStart=new Y,this._rotateEnd=new Y,this._rotateDelta=new Y,this._panStart=new Y,this._panEnd=new Y,this._panDelta=new Y,this._dollyStart=new Y,this._dollyEnd=new Y,this._dollyDelta=new Y,this._dollyDirection=new A,this._mouse=new Y,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Kw.bind(this),this._onPointerDown=Jw.bind(this),this._onPointerUp=jw.bind(this),this._onContextMenu=rE.bind(this),this._onMouseWheel=tE.bind(this),this._onKeyDown=nE.bind(this),this._onTouchStart=iE.bind(this),this._onTouchMove=sE.bind(this),this._onMouseDown=Qw.bind(this),this._onMouseMove=eE.bind(this),this._interceptControlDown=aE.bind(this),this._interceptControlUp=oE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(op),this.update(),this.state=mt.NONE}update(e=null){const t=this.object.position;Pt.copy(t).sub(this.target),Pt.applyQuaternion(this._quat),this._spherical.setFromVector3(Pt),this.autoRotate&&this.state===mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=an:n>Math.PI&&(n-=an),i<-Math.PI?i+=an:i>Math.PI&&(i-=an),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Pt.setFromSpherical(this._spherical),Pt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Pt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Pt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new A(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new A(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Pt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Uo.origin.copy(this.object.position),Uo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Uo.direction))<$w?this.object.lookAt(this.target):(lp.setFromNormalAndCoplanarPoint(this.object.up,this.target),Uo.intersectPlane(lp,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ah||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ah||this._lastTargetPosition.distanceToSquared(this.target)>Ah?(this.dispatchEvent(op),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?an/60*this.autoRotateSpeed*e:an/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Pt.setFromMatrixColumn(t,0),Pt.multiplyScalar(-e),this._panOffset.add(Pt)}_panUp(e,t){this.screenSpacePanning===!0?Pt.setFromMatrixColumn(t,1):(Pt.setFromMatrixColumn(t,0),Pt.crossVectors(this.object.up,Pt)),Pt.multiplyScalar(e),this._panOffset.add(Pt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Pt.copy(i).sub(this.target);let r=Pt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(an*this._rotateDelta.x/t.clientHeight),this._rotateUp(an*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(an*this._rotateDelta.x/t.clientHeight),this._rotateUp(an*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Y,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Jw(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Kw(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function jw(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ng),this.state=mt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Qw(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case yi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=mt.DOLLY;break;case yi.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=mt.ROTATE}break;case yi.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=mt.PAN}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(ud)}function eE(s){switch(this.state){case mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function tE(s){this.enabled===!1||this.enableZoom===!1||this.state!==mt.NONE||(s.preventDefault(),this.dispatchEvent(ud),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Ng))}function nE(s){this.enabled!==!1&&this._handleKeyDown(s)}function iE(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case _i.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=mt.TOUCH_ROTATE;break;case _i.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=mt.TOUCH_PAN;break;default:this.state=mt.NONE}break;case 2:switch(this.touches.TWO){case _i.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=mt.TOUCH_DOLLY_PAN;break;case _i.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=mt.TOUCH_DOLLY_ROTATE;break;default:this.state=mt.NONE}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(ud)}function sE(s){switch(this._trackPointer(s),this.state){case mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=mt.NONE}}function rE(s){this.enabled!==!1&&s.preventDefault()}function aE(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function oE(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Yn={AMBIENT_INTENSITY:1,DIRECTIONAL_INTENSITY:1,DIRECTIONAL_POSITION:{x:20,y:30,z:10},SHADOW_MAP_SIZE:2048,SHADOW_CAMERA_BOUNDS:{top:88,bottom:-88,left:-88,right:88,near:.1,far:300}},mi={ISOMETRIC_DISTANCE:60,VIEW_SIZE:45,NEAR:1,FAR:1e3},dd=-Math.atan2(mi.ISOMETRIC_DISTANCE*2,mi.ISOMETRIC_DISTANCE*.85),It={INITIAL_POSITION:{x:0,y:1,z:3},SCALE:{x:4,y:4,z:3},SPEED:13.2,DASH_MULTIPLIER:2,COLLISION_RADIUS:1.5,BOBBING:{BASE_HEIGHT:2},ANIMATIONS:{idle:{frames:1,duration:8,frameIndices:[1]},walk:{frames:3,duration:8,frameIndices:[0,1,2]}}},Ft={WIDTH:158.4,HEIGHT:158.4,GRID:32,CANVAS_SIZE:2048},Ch={SHADOW_TYPE:"PCFSoftShadowMap",ENABLE_SHADOWS:!0,TONE_MAPPING_EXPOSURE:.7},zr={ENABLE_ROTATE:!1,ENABLE_DAMPING:!0,DAMPING_FACTOR:.1,SCREEN_SPACE_PANNING:!1,MOUSE_BUTTONS:{LEFT:null}},lE={CHARACTER_SPRITE:"/assets/character.png"},cE={HYSTERESIS_DISTANCE:2},hE={CYCLE_INTERVAL:500},Js={SPAWN_INTERVAL:.05,LIFETIME:.45,INITIAL_OPACITY:.65,ALPHA_TEST:.05},Ga="ontouchstart"in window;function uE(){const s=new Bu,e=new id(16777215,Yn.AMBIENT_INTENSITY);s.add(e);const t=new nd(16777215,Yn.DIRECTIONAL_INTENSITY);t.position.set(Yn.DIRECTIONAL_POSITION.x,Yn.DIRECTIONAL_POSITION.y,Yn.DIRECTIONAL_POSITION.z),t.castShadow=!0;const n=Yn.SHADOW_CAMERA_BOUNDS;return t.shadow.camera.top=n.top,t.shadow.camera.bottom=n.bottom,t.shadow.camera.left=n.left,t.shadow.camera.right=n.right,t.shadow.camera.near=n.near,t.shadow.camera.far=n.far,t.shadow.mapSize.width=Yn.SHADOW_MAP_SIZE,t.shadow.mapSize.height=Yn.SHADOW_MAP_SIZE,s.add(t),{scene:s,ambientLight:e,directionalLight:t}}function dE(){const s=window.innerWidth/window.innerHeight,e=new Er(-45*s,mi.VIEW_SIZE*s,mi.VIEW_SIZE,-45,mi.NEAR,mi.FAR),t=mi.ISOMETRIC_DISTANCE;return e.position.set(0,t*2,t*.85),e.lookAt(0,0,0),e}const Ut={GRASS:"G",BRICK:"B",ROCK:"R",WATER:"W",STONES:"S",EDGE:"E",VOID:"V"},fE=new Set([Ut.WATER,Ut.STONES,Ut.EDGE,Ut.VOID]),ar=["EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE","EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE","EERRRRRGGGGGGGGGGGGBBBBBBBBBRREE","EERRGGGGGGGGGGGGGGGGBBBBBBBBBREE","EEGGGGGGGGGGGGGGGGBGGBBBBBBBBBEE","EEGGGGGGGGGGGGGGGGGBBBBBBBBBBBEE","EEGGGGGGGGGGGGGGGGGGGGGGGBBBBGEE","EEGGGGGGGGGGGGGGGGGGGGGGGGGGGGEE","EEGGGGGGGGGBBBBBBGGGGGGGGGGGGGEE","EEGGGGGGGGGBBBBBBGGGGGGGGGGGGGEE","EEGGGGGGGGGBBBBBBGGGGGGGGGGGGGEE","EEGGGGGGGGBBBBBBBGGGGSSSSWWWGGEE","EEGGGGGGGGBBBBBBBGGGSSWWWWWWWGEE","EEGGGGGGGGBBBBBBBGGSWWWWWWWWSGEE","EEGGGGGGGGGGGGGGGGGSWWWWWWWWSGEE","EEGGGGGGGGGGGGGGGGSWWWWWWWWWSGEE","EEGGGGGGGGGGGGGGGGSSWWWWWWWSSGEE","EEGGGGGGGGGGGGGGGGGGSSSWWSSGGGEE","EEGGGGGGGGGGGGGGGGGGGGSSSGGGGGEE","EEGGGGGGBBBBBBBBBBGGGGGGGGGGGGEE","EEGGGGGGBBBBBBBBBBBGGGGGGGGGGGEE","EEGGGGGGGBBBBBBBBBBGGGBBGBBBGGEE","EEGGGGGGGBBBBBBBBBBBBBBBBBBBBBEE","EEGGGGGGGGGBBBBBGGGGGGBGGBGGBREE","EEGGGGGGGGGGGGGGGGGGGGGGGGGGGGEE","EEGGGGGGGGGGGGGGGGGGGGGGGGGRRGEE","EEGGGGGGGGGGGGGGGGGGGGGGGGRRRGEE","EEGGGGGGGGGGGGGGGGGGGGGGGGGGGGEE","EERRGGGGGGGGGGGGGGGGGGGGGGGGGREE","EERRGGGGGGGGGGGGGGGGGGGGGGGGRREE","EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE","EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE"];function pE(){return[22,23,24,37,38,39].map(e=>`/assets/grass/tile_${String(e).padStart(3,"0")}.png`)}function mE(){return[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,25,26].map(e=>`/assets/brick/tile_${String(e).padStart(3,"0")}.png`)}function cp(){return[53,54,55,56,57,58,59,60].map(e=>`/assets/rock/tile_${String(e).padStart(3,"0")}.png`)}function gE(){const s=[];for(let e=104;e<=114;e++)s.push(e);return s.map(e=>`/assets/water/tile_${String(e).padStart(3,"0")}.png`)}function _E(){const s=[];for(let e=61;e<=81;e++)s.push(e);return s.map(e=>`/assets/stones_on_water/tile_${String(e).padStart(3,"0")}.png`)}const xE={[Ut.GRASS]:pE(),[Ut.BRICK]:mE(),[Ut.ROCK]:cp(),[Ut.WATER]:gE(),[Ut.STONES]:_E(),[Ut.EDGE]:cp()};function wn(s,e){return{x:(s-e)*2.475,z:(s+e)*1.2375-38.3625}}const yE=[{id:"bookshelf",spritePath:"/assets/book_shelf.png",tileCol:3,tileRow:6,...wn(3,6),scale:{x:15,y:12,z:1},triggerRadius:8,collisionBox:{w:11,d:3,h:8},overlayId:"books-overlay",label:"Bookshelf",description:"Books & Movies",icon:"📚"},{id:"server",spritePath:"/assets/server.png",tileCol:15,tileRow:4,...wn(15,4),scale:{x:10,y:8,z:1},triggerRadius:8,collisionBox:{w:8,d:4,h:7},overlayId:"blog-overlay",label:"Server",description:"Tech Blog",icon:"🖥️"},{id:"rockart",spritePath:"/assets/rock_art.png",tileCol:25,tileRow:5,...wn(25,5),scale:{x:10,y:10,z:1},triggerRadius:8,collisionBox:{w:8,d:4,h:5},overlayId:"art-overlay",label:"Rock Art",description:"Art Gallery",icon:"🎨"},{id:"workbench",spritePath:"/assets/workbench.png",tileCol:15,tileRow:12,...wn(15,12),scale:{x:12,y:12,z:1},triggerRadius:8,collisionBox:{w:12,d:5,h:6},overlayId:"projects-overlay",label:"Workbench",description:"Projects",icon:"🔧"},{id:"musicplayer",spritePath:"/assets/music_player.png",tileCol:25,tileRow:25,...wn(25,25),scale:{x:5,y:4,z:1},triggerRadius:8,collisionBox:{w:4,d:3,h:4},overlayId:"music-overlay",label:"Gramophone",description:"Music & Playlists",icon:"🎵"},{id:"contact",spritePath:"/assets/contact.png",tileCol:4,tileRow:28,...wn(4,28),scale:{x:12,y:12,z:1},triggerRadius:8,collisionBox:{w:7,d:3,h:10},overlayId:"contact-overlay",label:"Birdhouse",description:"Contact Info",icon:"🐦"},{id:"home",spritePath:"/assets/home.png",tileCol:17,tileRow:24,...wn(17,24),scale:{x:18,y:16,z:1},triggerRadius:10,collisionBox:{w:10,d:8,h:10,zCenter:-4},overlayId:"home-overlay",label:"Home",description:"Home",icon:"🏠"},{id:"now-board",spritePath:"/assets/bulletin_board.png",tileCol:19,tileRow:10,...wn(19,10),scale:{x:8,y:9,z:1},triggerRadius:8,collisionBox:{w:6,d:3,h:7},overlayId:"now-overlay",label:"Bulletin Board",description:"What Joel's up to now",icon:"📌"},{id:"signpost",spritePath:"/assets/signpost.png",tileCol:9,tileRow:15,...wn(9,15),scale:{x:5,y:7,z:1},triggerRadius:7,collisionBox:{w:4,d:2,h:6},overlayId:"start-overlay",label:"Signpost",description:"A message for you",icon:"🔥"},{id:"car",spritePath:"/assets/car.png",tileCol:11,tileRow:20,...wn(11,20),scale:{x:22.5,y:13.5,z:1},triggerRadius:15,collisionBox:{w:12,d:7,h:7},overlayId:"travel-overlay",label:"Joel's Car",description:"Travel Plans",icon:"🚗"}],vE=[{id:"ship",spritePath:"/assets/ship.png",position:{x:40,y:10,z:-20},scale:{x:40,y:32},animation:{type:"hover",amplitude:1.5,speed:1.2}}],Zt={noclip:!1,fly:!1,turbo:!1},hp=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];let Vr=[],Fo="",up=null;function or(s){let e=document.getElementById("cheat-toast");e||(e=document.createElement("div"),e.id="cheat-toast",e.style.cssText=["position:fixed","top:72px","left:50%","transform:translateX(-50%)",'font-family:"Press Start 2P",monospace',"font-size:10px","color:#00ff44","background:#000","padding:8px 18px","border:2px solid #00ff44","z-index:50","pointer-events:none","transition:opacity 0.4s"].join(";"),document.body.appendChild(e)),e.textContent=`CHEAT: ${s}`,e.style.opacity="1",clearTimeout(up),up=setTimeout(()=>{e.style.opacity="0"},3e3)}function bE(s){s==="NOCLIP"&&(Zt.noclip=!Zt.noclip,or(`NOCLIP ${Zt.noclip?"ON":"OFF"}`)),s==="FLY"&&(Zt.fly=!Zt.fly,or(`FLY ${Zt.fly?"ON":"OFF"}`)),s==="TURBO"&&(Zt.turbo=!Zt.turbo,or(`TURBO ${Zt.turbo?"ON":"OFF"}`)),s==="RESET"&&(Zt.noclip=Zt.fly=Zt.turbo=!1,or("CHEATS CLEARED"))}function SE(){if(or("RAINBOW MODE — press ESC to exit"),!document.getElementById("rainbow-kf")){const r=document.createElement("style");r.id="rainbow-kf",r.textContent="@keyframes rainbowHue{from{filter:hue-rotate(0deg)}to{filter:hue-rotate(360deg)}}",document.head.appendChild(r)}const s=document.querySelector("canvas");s&&(s.style.animation="rainbowHue 2s linear infinite");const e=["#ff4444","#ff8800","#ffff00","#44ff44","#44aaff","#cc44ff"],t=window.innerWidth/2,n=window.innerHeight/2;for(let r=0;r<50;r++){const a=document.createElement("div"),o=r/50*Math.PI*2,l=80+Math.random()*120,c=Math.cos(o)*l,h=Math.sin(o)*l-60;a.style.cssText=`position:fixed;width:8px;height:8px;left:${t}px;top:${n}px;background:${e[r%e.length]};z-index:999;pointer-events:none;border-radius:2px;transition:transform 0.9s ease-out,opacity 0.9s ease-out`,document.body.appendChild(a),requestAnimationFrame(()=>{a.style.transform=`translate(${c}px,${h}px)`,a.style.opacity="0"}),setTimeout(()=>a.remove(),1e3)}const i=r=>{r.key==="Escape"&&(s&&(s.style.animation=""),or("RAINBOW MODE OFF"),window.removeEventListener("keydown",i))};window.addEventListener("keydown",i)}const Oo=new wg,Ks=new Y;function ME(s,e,t,n){n.addEventListener("mousedown",a=>{if(a.button!==0)return;Ks.x=a.clientX/window.innerWidth*2-1,Ks.y=-(a.clientY/window.innerHeight)*2+1,Oo.setFromCamera(Ks,s);const o=Oo.intersectObject(e);o.length>0&&(t.targetPosition.copy(o[0].point),t.targetPosition.y=1,t.isMoving=!0)}),n.addEventListener("contextmenu",a=>a.preventDefault()),window.addEventListener("keydown",a=>{if(a.key in t.keys&&(t.keys[a.key]=!0,t.isMoving=!1),a.key.length===1){Fo=(Fo+a.key.toUpperCase()).slice(-10);for(const o of["NOCLIP","FLY","TURBO","RESET"])if(Fo.endsWith(o)){bE(o),Fo="";break}}Vr.push(a.key),Vr.length>hp.length&&Vr.shift(),Vr.join(",")===hp.join(",")&&(SE(),Vr=[])}),window.addEventListener("keyup",a=>{a.key in t.keys&&(t.keys[a.key]=!1)});let i=null,r=null;n.addEventListener("touchstart",a=>{a.touches.length===1?(i=a.touches[0].clientX,r=a.touches[0].clientY):(i=null,r=null)},{passive:!0}),n.addEventListener("touchmove",a=>{if(i===null)return;const o=a.touches[0].clientX-i,l=a.touches[0].clientY-r;Math.hypot(o,l)>=10&&(i=null,r=null)},{passive:!0}),n.addEventListener("touchend",a=>{if(i!==null&&a.changedTouches.length===1&&a.touches.length===0){const o=a.changedTouches[0].clientX-i,l=a.changedTouches[0].clientY-r;if(i=null,r=null,Math.hypot(o,l)<10){Ks.x=a.changedTouches[0].clientX/window.innerWidth*2-1,Ks.y=-(a.changedTouches[0].clientY/window.innerHeight)*2+1,Oo.setFromCamera(Ks,s);const c=Oo.intersectObject(e);c.length>0&&(t.targetPosition.copy(c[0].point),t.targetPosition.y=1,t.isMoving=!0),a.preventDefault()}}},{passive:!1}),n.addEventListener("touchcancel",()=>{i=null,r=null},{passive:!0})}const wE=new Ba,EE=8,TE=3,Ug=1/EE,Fg=1/TE,dp=Ft.WIDTH/2,fp=Ft.HEIGHT/2,di=new A,Wo=new A,AE=new A(0,1,0);function CE(s){s.getWorldDirection(di),di.y=0,di.lengthSq()<.001&&di.set(0,0,-1),di.normalize(),Wo.crossVectors(di,AE).normalize()}function RE(){const s=wE.load(lE.CHARACTER_SPRITE,n=>{n.magFilter=et},void 0,n=>console.error("Error loading character texture:",n));s.wrapS=bi,s.wrapT=bi,s.repeat.set(Ug,Fg),s.offset.set(0,1);const e=new Mr({map:s,transparent:!0,alphaTest:.5}),t=new Ra(e);return t.castShadow=!0,t.scale.set(It.SCALE.x,It.SCALE.y,It.SCALE.z),t.position.set(It.INITIAL_POSITION.x,It.INITIAL_POSITION.y,It.INITIAL_POSITION.z),t.userData={direction:"right",directionIndex:0,currentAnimation:"idle",frame:1,frameItr:0},t}function pp(s){if(!s||s.lengthSq()===0)return 0;const e=(Math.atan2(s.z,s.x)*180/Math.PI+360)%360;return(Math.round(e/45)%8+2)%8}function js(s,e){s.userData.currentAnimation!==e&&(s.userData.currentAnimation=e,s.userData.frame=e==="idle"?1:0,s.userData.frameItr=0)}function mp(s){const{currentAnimation:e,directionIndex:t}=s.userData,n=It.ANIMATIONS[e];s.userData.frameItr+=1,s.userData.frameItr>n.duration&&n.frames>1&&(s.userData.frameItr=0,s.userData.frame=n.frameIndices[(s.userData.frame+1)%n.frames]),s.material.map.offset.set(t*Ug,s.userData.frame*Fg)}function lr(s,e){const t=(e+38.3625)/1.2375,n=s/2.475,i=1e-9,r=Math.floor((t+n)/2+i),a=Math.floor((t-n)/2+i);return{col:r,row:a}}function IE(s,e){if(s<0||s>=Ft.GRID||e<0||e>=Ft.GRID)return!0;const t=ar[e]?.[s];return t?fE.has(t):!0}function PE(s,e){const t=It.COLLISION_RADIUS;return[lr(s-t,e-t),lr(s+t,e-t),lr(s-t,e+t),lr(s+t,e+t)].some(i=>IE(i.col,i.row))}function LE(s,e){if(Zt.noclip)return!1;if(PE(s.x,s.z))return!0;const t=new Ot(s,It.COLLISION_RADIUS);for(let n=0;n<e.length;n++)if(e[n].intersectsSphere(t))return!0;return!1}function Og(s){const e=It.COLLISION_RADIUS+.1,t=s.clone();return t.x=Math.max(-dp+e,Math.min(dp-e,t.x)),t.z=Math.max(-fp+e,Math.min(fp-e,t.z)),t}function Rh(s,e,t){let n=s.position.clone().add(e);return n=Og(n),LE(n,t)?!1:(s.position.copy(n),!0)}function gp(s,e,t){if(Rh(s,e,t))return!0;const n=new A(e.x,0,0);if(n.lengthSq()>0&&Rh(s,n,t))return!0;const i=new A(0,0,e.z);return!!(i.lengthSq()>0&&Rh(s,i,t))}function DE(s,e,t,n,i=[],r=!1,a=null){if(r){s.position.y=It.BOBBING.BASE_HEIGHT,mp(s);return}const{keys:o,targetPosition:l}=e,c=It.SPEED*(o[" "]?It.DASH_MULTIPLIER:1),h=new A;let u=!1;if(e.isMoving&&(e.targetPosition=Og(e.targetPosition)),a?CE(a):(di.set(0,0,-1),Wo.set(1,0,0)),(o.w||o.ArrowUp)&&(h.addScaledVector(di,1),u=!0),(o.s||o.ArrowDown)&&(h.addScaledVector(di,-1),u=!0),(o.a||o.ArrowLeft)&&(h.addScaledVector(Wo,-1),u=!0),(o.d||o.ArrowRight)&&(h.addScaledVector(Wo,1),u=!0),u&&h.lengthSq()>0)e.isMoving=!1,js(s,"walk"),h.normalize(),s.userData.directionIndex=pp(h),h.multiplyScalar(c*n),gp(s,h,i)||js(s,"idle");else if(e.isMoving){js(s,"walk");const d=s.position.x-l.x,f=s.position.z-l.z;if(Math.sqrt(d*d+f*f)>.1){const p=new A().subVectors(l,s.position);p.y=0,p.normalize(),s.userData.directionIndex=pp(p),s.userData.direction=p.x>0?"right":"left",p.multiplyScalar(c*n),gp(s,p,i)||(e.isMoving=!1,js(s,"idle"))}else e.isMoving=!1,js(s,"idle")}else js(s,"idle");s.position.y=It.BOBBING.BASE_HEIGHT,mp(s)}const xi=Ft.CANVAS_SIZE/Ft.GRID;function eu(s,e){let t=s*1e3+e;return t=(t>>16^t)*73244475,t=(t>>16^t)*73244475,t=t>>16^t,(t&2147483647)/2147483647}function NE(s){return new Promise((e,t)=>{const n=new Image;n.onload=()=>e(n),n.onerror=t,n.src=s})}async function UE(){const s={};for(const[e,t]of Object.entries(xE))s[e]=await Promise.all(t.map(NE));return s}const tu=xi/2,aa=xi/4,$r=Ft.CANVAS_SIZE/2,Zr=Ft.CANVAS_SIZE/2-(Ft.GRID-1)*aa;function FE(s,e){const t=[],n=(Ft.GRID-1)*2;for(let i=0;i<=n;i++){const r=Math.max(0,i-Ft.GRID+1),a=Math.min(Ft.GRID-1,i);for(let o=r;o<=a;o++){const l=i-o,c=ar[l]?.[o]||Ut.EDGE;if(c===Ut.VOID)continue;const h=e[c]||e[Ut.GRASS],u=Math.floor(eu(o,l)*h.length),d=h[u],f=(o-l)*tu+$r,p=(o+l)*aa+Zr,_=f-xi/2,g=p-xi/2;if(c===Ut.EDGE&&(s.globalAlpha=.7),s.drawImage(d,_,g,xi,xi),s.globalAlpha=1,c===Ut.WATER){const m=(o*7+l*13)%h.length;t.push({dx:_,dy:g,offset:m,currentFrame:m})}}}return t}const nu=Ft.WIDTH/2,_p=nu*.52;function OE(s,e,t,n,i,r){const a=new He,o=new Float32Array([s[0],t,s[1],e[0],t,e[1],e[0],n,e[1],s[0],n,s[1]]),l=new Float32Array([0,1,i,1,i,0,0,0]),c=e[0]-s[0],h=e[1]-s[1],u=Math.sqrt(c*c+h*h),d=h/u,f=-c/u,p=new Float32Array([d,0,f,d,0,f,d,0,f,d,0,f]);return a.setAttribute("position",new tt(o,3)),a.setAttribute("normal",new tt(p,3)),a.setAttribute("uv",new tt(l,2)),a.setIndex([0,1,2,0,2,3]),a}function kE(s){const e=document.createElement("canvas");e.width=2048,e.height=256;const t=e.getContext("2d");t.imageSmoothingEnabled=!1;const n=s[Ut.BRICK]||[],i=s[Ut.ROCK]||[],r=32,a=Math.ceil(2048/r);t.fillStyle="#3a7d32",t.fillRect(0,0,2048,32);for(let l=1;l<=3;l++)for(let c=0;c<a;c++){const h=n[Math.floor(eu(c,l+100)*n.length)];h&&t.drawImage(h,c*r,l*r,r,r)}for(let l=4;l<=6;l++)for(let c=0;c<a;c++){const h=i[Math.floor(eu(c,l+200)*i.length)];h&&t.drawImage(h,c*r,l*r,r,r)}t.fillStyle="#1a1008",t.fillRect(0,224,2048,32);const o=new Pa(e);return o.magFilter=et,o.minFilter=et,o.colorSpace=Ht,o}function BE(s){const e=[],t=kE(s),n=[[0,-_p],[nu,0],[0,_p],[-nu,0]];for(let i=0;i<1;i++){const r=n[i],a=n[(i+1)%4],o=Math.sqrt((a[0]-r[0])**2+(a[1]-r[1])**2),l=OE(r,a,0,-30,o/16),c=new Fa({map:t.clone(),side:Kn});e.push(new bt(l,c))}return e}let iu=[],Xo=[],kg=null,Bg=null,Ih=0;async function GE(){const{CANVAS_SIZE:s,WIDTH:e,HEIGHT:t}=Ft,n=document.createElement("canvas");n.width=s,n.height=s;const i=n.getContext("2d");i.imageSmoothingEnabled=!1;const r=xi/2,a=[$r,Zr-r],o=[(Ft.GRID-1)*tu+$r+r,(Ft.GRID-1)*aa+Zr],l=[$r,(Ft.GRID-1)*2*aa+Zr+r],c=[-31*tu+$r-r,(Ft.GRID-1)*aa+Zr];i.save(),i.beginPath(),i.moveTo(a[0],a[1]),i.lineTo(o[0],o[1]),i.lineTo(l[0],l[1]),i.lineTo(c[0],c[1]),i.closePath(),i.clip();const h=new Pa(n);h.magFilter=et,h.minFilter=et,h.colorSpace=Ht,h.generateMipmaps=!1;const u=new ii(e,t),d=new Fa({map:h,transparent:!0}),f=new bt(u,d);f.rotation.x=-Math.PI/2,f.receiveShadow=!0;const p=await UE();iu=FE(i,p),Xo=p[Ut.WATER]||[],kg=i,Bg=h,h.needsUpdate=!0;const _=BE(p);return{groundMesh:f,walls:_}}function zE(s){if(!(iu.length===0||Xo.length===0)&&(Ih+=s*1e3,!(Ih<hE.CYCLE_INTERVAL))){Ih=0;for(const e of iu){e.currentFrame=(e.currentFrame+1)%Xo.length;const t=Xo[e.currentFrame];kg.drawImage(t,e.dx,e.dy,xi,xi)}Bg.needsUpdate=!0}}const rs=500,VE=320;let cr=null,Li=null,su=null,ru=null,qo=null,xp=0;function HE(){const s=new Float32Array(rs*3);Li=new Float32Array(rs*3),su=new Float32Array(rs),ru=new Float32Array(rs),qo=new Float32Array(rs);for(let t=0;t<rs;t++){const n=Math.random(),i=Math.random(),r=2*Math.PI*n,a=Math.acos(2*i-1),o=VE*(.85+Math.random()*.3);s[t*3]=o*Math.sin(a)*Math.cos(r),s[t*3+1]=o*Math.sin(a)*Math.sin(r),s[t*3+2]=o*Math.cos(a),su[t]=Math.random()*Math.PI*2,ru[t]=.4+Math.random()*2,qo[t]=.4+Math.random()*.6;const l=qo[t]*.6;Li[t*3]=l,Li[t*3+1]=l*.97,Li[t*3+2]=l}cr=new He,cr.setAttribute("position",new tt(s,3)),cr.setAttribute("color",new tt(Li,3));const e=new Ia({size:2,vertexColors:!0,transparent:!0,opacity:1,depthWrite:!1,sizeAttenuation:!1});return new mc(cr,e)}function WE(s){if(cr){xp+=s;for(let e=0;e<rs;e++){const t=xp*ru[e]+su[e],n=qo[e]*(.2+.8*(.5+.5*Math.sin(t)));Li[e*3]=n,Li[e*3+1]=n*.97,Li[e*3+2]=n}cr.attributes.color.needsUpdate=!0}}const XE=new Ba;class qE{constructor(e){this.id=e.id,this.spritePath=e.spritePath,this.position=new A(e.x,0,e.z),this.scale=e.scale,this.triggerRadius=e.triggerRadius,this.collisionBoxSize=e.collisionBox,this.overlayId=e.overlayId,this.label=e.label,this.description=e.description,this.icon=e.icon,this.mesh=null,this.collider=null}create(){return new Promise((e,t)=>{XE.load(this.spritePath,n=>{n.magFilter=et,n.minFilter=et;const i=new ii(this.scale.x,this.scale.y);i.translate(0,this.scale.y/2,0);const r=new Bn({map:n,transparent:!0,alphaTest:.5,side:En});this.mesh=new bt(i,r),this.mesh.rotation.x=dd,this.mesh.position.copy(this.position);const{w:a,d:o,h:l}=this.collisionBoxSize,c=this.collisionBoxSize.zCenter!==void 0?this.collisionBoxSize.zCenter:-this.scale.y/2;this.collider=new Bt(new A(this.position.x-a/2,0,this.position.z+c-o/2),new A(this.position.x+a/2,l,this.position.z+c+o/2)),e(this)},void 0,n=>{console.error(`Error loading entity sprite ${this.id}:`,n),t(n)})})}getDistanceTo(e){const t=e.x-this.position.x,n=e.z-this.position.z;return Math.sqrt(t*t+n*n)}dispose(){this.mesh&&(this.mesh.geometry.dispose(),this.mesh.material.map?.dispose(),this.mesh.material.dispose())}}const YE=new Ba;function $E(s){return new Promise((e,t)=>{YE.load(s,e,void 0,t)})}async function ZE(s){const e=[];for(const t of s){const n=await $E(t.spritePath);n.magFilter=et,n.minFilter=et;const i=new ii(t.scale.x,t.scale.y);i.translate(0,t.scale.y/2,0);const r=new Bn({map:n,transparent:!0,alphaTest:.5,side:En}),a=new bt(i,r);a.rotation.x=dd,a.position.set(t.position.x,t.position.y,t.position.z),e.push({mesh:a,config:t,baseY:t.position.y})}return e}function JE(s,e){for(const t of s){const n=t.config.animation;n&&(n.type==="hover"?t.mesh.position.y=t.baseY+Math.sin(e*n.speed)*n.amplitude:console.warn(`[decorative] Unknown animation type: "${n.type}" on "${t.config.id}"`))}}const KE=14;let au=[];function jE(){const e=document.createElement("canvas");e.width=16,e.height=16;const t=e.getContext("2d"),n=t.createRadialGradient(16/2,16/2,0,16/2,16/2,16/2);n.addColorStop(0,"rgba(255, 255, 180, 1)"),n.addColorStop(.4,"rgba(200, 255, 100, 0.6)"),n.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=n,t.fillRect(0,0,16,16);const i=new Pa(e);return i.magFilter=vt,i}function QE(s){const e=jE(),t=new ii(.9,.9);au=[];for(let n=0;n<KE;n++){const i=new Bn({map:e,transparent:!0,depthWrite:!1,blending:jo,opacity:0}),r=new bt(t,i),a=(Math.random()-.5)*60,o=(Math.random()-.5)*60,l=2+Math.random()*4;r.position.set(a,l,o),r.rotation.x=dd;const c={mesh:r,baseY:l,phase:Math.random()*Math.PI*2,driftX:(Math.random()-.5)*.3,driftZ:(Math.random()-.5)*.3,wrapMin:-30,wrapMax:30};au.push(c),s.add(r)}}function eT(s,e,t){const n=e==="night"||e==="evening"?1:e==="dawn"||e==="dusk"?.35:0;for(const i of au){i.mesh.position.y=i.baseY+Math.sin(s*1.2+i.phase)*.6,i.mesh.position.x+=i.driftX*t,i.mesh.position.z+=i.driftZ*t,i.mesh.position.x>i.wrapMax&&(i.mesh.position.x=i.wrapMin),i.mesh.position.x<i.wrapMin&&(i.mesh.position.x=i.wrapMax),i.mesh.position.z>i.wrapMax&&(i.mesh.position.z=i.wrapMin),i.mesh.position.z<i.wrapMin&&(i.mesh.position.z=i.wrapMax);const r=i.mesh.material.opacity;i.mesh.material.opacity=r+(n-r)*.008}}let ou=null,Yo=null;const yp=new A;function tT(s,e,t){ou=e,Yo=t}function nT(s){if(!ou||!Yo)return;const e=1-Math.pow(.92,s*60);yp.set(Yo.position.x,0,Yo.position.z),ou.target.lerp(yp,e)}let $o=null,lu=null,Ea=null,cu=null,hu=null,vp=!1;function iT(s,e,t,n){!Ga||vp||(vp=!0,$o=s,lu=e,Ea=t,cu=n,lT(),rT(),aT(),oT())}function Gg(s){hu&&(hu.style.display=s?"flex":"none")}const sT=[{label:"↖",keys:["w","a"],gridArea:"1 / 1"},{label:"↑",keys:["w"],gridArea:"1 / 2"},{label:"↗",keys:["w","d"],gridArea:"1 / 3"},{label:"←",keys:["a"],gridArea:"2 / 1"},{label:"→",keys:["d"],gridArea:"2 / 3"},{label:"↙",keys:["s","a"],gridArea:"3 / 1"},{label:"↓",keys:["s"],gridArea:"3 / 2"},{label:"↘",keys:["s","d"],gridArea:"3 / 3"}];function rT(){const s=document.createElement("div");s.id="mobile-dpad";for(const e of sT){const t=document.createElement("button");t.className="dpad-btn",t.textContent=e.label,t.style.gridArea=e.gridArea;let n=null;t.addEventListener("touchstart",r=>{if(r.preventDefault(),!(Ea&&Ea())&&n===null){n=r.changedTouches[0].identifier,$o.isMoving=!1;for(const a of e.keys)$o.keys[a]=!0;t.classList.add("active")}},{passive:!1});const i=r=>{for(const a of r.changedTouches)if(a.identifier===n){n=null;for(const o of e.keys)$o.keys[o]=!1;t.classList.remove("active");break}};t.addEventListener("touchend",i,{passive:!0}),t.addEventListener("touchcancel",i,{passive:!0}),s.appendChild(t)}document.body.appendChild(s)}function aT(){const s=document.createElement("button");s.id="mobile-interact",s.textContent="ℹ️",s.style.display="none",s.addEventListener("touchend",e=>{if(e.preventDefault(),Ea&&Ea())return;const t=lu&&lu();t&&cu&&cu(t.overlayId)},{passive:!1}),document.body.appendChild(s),hu=s}function oT(){if(localStorage.getItem("mobile-hint-seen"))return;const s=document.createElement("div");s.id="mobile-hint",s.innerHTML="Use the pad to move<br>Tap ℹ️ to interact";let e;const t=()=>{clearTimeout(e),localStorage.setItem("mobile-hint-seen","1"),s.style.opacity="0",setTimeout(()=>s.remove(),400)};s.addEventListener("touchend",n=>{n.preventDefault(),t()},{passive:!1}),document.body.appendChild(s),e=setTimeout(t,4e3)}function lT(){const s=document.createElement("style");s.textContent=`
        /* --- D-Pad container --- */
        #mobile-dpad {
            position: fixed;
            left: 16px;
            bottom: max(16px, env(safe-area-inset-bottom));
            display: grid;
            grid-template-columns: repeat(3, 48px);
            grid-template-rows: repeat(3, 48px);
            gap: 4px;
            z-index: 50;
            user-select: none;
            -webkit-user-select: none;
        }

        /* --- D-Pad buttons --- */
        .dpad-btn {
            width: 48px;
            height: 48px;
            background: rgba(0, 0, 0, 0.55);
            border: 2px solid rgba(184, 134, 11, 0.6);
            border-radius: 4px;
            color: rgba(255, 215, 0, 0.85);
            font-size: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            touch-action: none;
            font-family: 'Press Start 2P', monospace;
            transition: background 0.08s, border-color 0.08s;
            -webkit-tap-highlight-color: transparent;
        }

        .dpad-btn.active {
            background: rgba(184, 134, 11, 0.35);
            border-color: rgba(255, 215, 0, 0.9);
        }

        /* --- Interact button --- */
        #mobile-interact {
            position: fixed;
            right: 16px;
            bottom: max(16px, env(safe-area-inset-bottom));
            width: 60px;
            height: 60px;
            background: rgba(0, 0, 0, 0.65);
            border: 2px solid rgba(184, 134, 11, 0.7);
            border-radius: 50%;
            color: rgba(255, 215, 0, 0.9);
            font-size: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            touch-action: none;
            z-index: 50;
            user-select: none;
            -webkit-user-select: none;
            -webkit-tap-highlight-color: transparent;
        }

        /* --- Hide controls while overlay is open --- */
        body:has(#overlay-container.overlay-visible) #mobile-dpad,
        body:has(#overlay-container.overlay-visible) #mobile-interact {
            visibility: hidden;
            pointer-events: none;
        }

        /* --- First-visit hint --- */
        #mobile-hint {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.88);
            border: 2px solid #b8860b;
            color: #ffd700;
            font-family: 'Press Start 2P', monospace;
            font-size: clamp(8px, 2.5vw, 12px);
            padding: 20px 28px;
            text-align: center;
            line-height: 1.8;
            z-index: 200;
            pointer-events: auto;
            opacity: 1;
            transition: opacity 0.4s ease;
        }
    `,document.head.appendChild(s)}let zg=[],ln=null,_n=null,Ph=null;function cT(s,e,t){zg=s,_n=e,Ph=t;const n=_n.querySelector(".toast-hint");n&&(n.innerHTML=Ga?"Tap to explore":"Click or press <kbd>E</kbd>"),_n.addEventListener("click",()=>{ln&&ln.overlayId&&Ph(ln.overlayId)}),window.addEventListener("keydown",i=>{(i.key==="e"||i.key==="E")&&ln&&ln.overlayId&&Ph(ln.overlayId)})}function hT(){return ln}function uT(s,e){if(e){bp();return}let t=null,n=1/0;for(const i of zg){const r=i.getDistanceTo(s);r<i.triggerRadius&&r<n&&(t=i,n=r)}if(ln&&t&&t!==ln){const i=ln.getDistanceTo(s);i<ln.triggerRadius&&n>=i-cE.HYSTERESIS_DISTANCE&&(t=ln)}t?(dT(t),ln=t):(bp(),ln=null)}function dT(s){if(!_n)return;const e=_n.querySelector(".toast-icon"),t=_n.querySelector(".toast-label"),n=_n.querySelector(".toast-desc");e&&(e.textContent=s.icon),t&&(t.textContent=s.label),n&&(n.textContent=s.description);const i=_n.querySelector(".toast-hint");i&&(i.style.display=s.overlayId?"":"none"),_n.style.opacity="1",_n.style.pointerEvents=s.overlayId?"auto":"none",Ga&&Gg(!!s.overlayId)}function bp(){_n&&(_n.style.opacity="0",_n.style.pointerEvents="none",Ga&&Gg(!1))}const fT="modulepreload",pT=function(s){return"/"+s},Sp={},mT=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let c=function(h){return Promise.all(h.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};var a=c;document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");i=c(t.map(h=>{if(h=pT(h),h in Sp)return;Sp[h]=!0;const u=h.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${d}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":fT,u||(f.as="script"),f.crossOrigin="",f.href=h,l&&f.setAttribute("nonce",l),document.head.appendChild(f),u)return new Promise((p,_)=>{f.addEventListener("load",p),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&r(l.reason);return e().catch(r)})},gT="/assets/ajay-DJu6yGcF.png",_T="/assets/amma-BETgS8tz.png",xT="/assets/gabriel-Du9u3_tD.png",yT="/assets/kamalam-CQZYPKIG.png",vT="/assets/kausik-QLkPP3LY.png",bT="/assets/neha-TUYTkRIK.png",ST="/assets/nila-PIbm4Mkv.png",MT="/assets/pappa_mummy-noyZWOXM.png",wT="/assets/prakash-DVjkgQW-.png",ET="/assets/rashmi-Dol_jgvp.png",TT="/assets/roona-BBkT8woK.png",AT="/assets/self-BZsMSzeb.png",CT="/assets/shirley-Dcb2PNh9.png",RT="/assets/siva-nK1Ml-8Y.png",IT="/assets/faces_of_neha-CSjnlGoX.png",PT="/assets/friends-DY4e--VB.png",LT="/assets/personalities_of_neha-T-7xFVDR.png",DT="/assets/teachers-BS4wM95O.png",NT="/assets/mika-C6EfqaR1.png",UT="/assets/neha_hammock-CIYhZsbC.png",FT="/assets/neha_pole-Du7GFvFb.png",OT="/assets/rinibot-Ce3X2xlg.png",kT="/assets/the_girl-B6UuTOhF.png",BT=`---
title: How to Write Skills That Actually Slap (A Claude Code Guide)
date: 2026-03-26
tags: claude, ai, tools, productivity
excerpt: A no-fluff guide to writing Claude Code skills that work like magic — with bookmarks, patterns, and the BKMs that took me way too long to figure out.
---

# How to Write Skills That Actually Slap

So you've been using Claude Code for a while. You've got your workflows. You've typed the same 200-word prompt for the fifth time this week. And somewhere in the back of your head, a tiny voice says: *there has to be a better way.*

There is. It's called **Skills**.

This is everything I wish I knew before I wasted a week writing skills that kinda worked but also kinda didn't.

---

## What Even Is a Skill?

A skill is a Markdown file Claude Code can invoke on demand — like a slash command you write yourself. You type \`/my-skill\`, and Claude reads the skill file and executes whatever instructions you put in it.

Think of it as a saved prompt with superpowers.

The file lives in \`.claude/skills/\` and looks like this:

\`\`\`markdown
---
name: my-skill
description: Does the thing I always forget how to do
---

When this skill is invoked, you will...
\`\`\`

That's it. That's the whole skeleton.

---

## The BKMs (Best Known Methods)

These are the patterns that separate a skill that works from a skill that *works every single time*.

### 1. Lead with the trigger condition

The first thing Claude reads is what matters most. Don't warm up — tell it exactly when this skill applies and what mode it's in:

\`\`\`markdown
When this skill is invoked, you are in **code review mode**.
Your job is to review the diff since the last commit and...
\`\`\`

If you bury the context, Claude will guess. Claude guessing is not your friend.

---

### 2. Use numbered steps for sequential work

Claude follows numbered lists with surprising reliability. If your skill has an order of operations, write it as a numbered list:

\`\`\`markdown
1. Run \`git diff HEAD\` to see what changed
2. Identify any files that touch the database layer
3. For each database file, check for...
4. Output a summary in this format: ...
\`\`\`

Bullet points are for "do these in any order". Numbers mean "do these in this order". Claude knows the difference.

---

### 3. Spell out the output format

The biggest time-saver in any skill is a concrete output template. Instead of:

> summarise what you found

Write:

\`\`\`markdown
Output your findings in this exact format:

**Status**: PASS | FAIL | WARNING
**Files changed**: N
**Issues found**:
- [filename:line] description of issue

**Recommendation**: one sentence on what to do next
\`\`\`

Now you get consistent, parseable output every time. You can even build other skills that read this output.

---

### 4. Scope it tightly

A skill that does one thing well is worth ten that do five things okay. The best skills I have are almost embarrassingly narrow:

- \`/fix-build\` — just fixes TypeScript errors, nothing else
- \`/commit\` — just formats and creates a git commit
- \`/review-pr\` — just reviews the open PR against the spec

If a skill starts with "first do X, and also Y, and while you're at it Z" — split it into three skills.

---

### 5. Include failure modes

Tell Claude what to do when things go wrong:

\`\`\`markdown
If no staged files are found, say:
"Nothing staged. Run \`git add <files>\` first."
and stop — do not proceed.
\`\`\`

Without this, Claude will improvise. Sometimes that's fine. Usually it's not what you wanted at 2am debugging a deploy.

---

### 6. Reference other files by path

Skills can tell Claude to read specific files before acting. This is huge for context-heavy tasks:

\`\`\`markdown
Before starting, read:
- \`CLAUDE.md\` for project conventions
- \`docs/architecture.md\` for system overview
- The current \`package.json\` for available scripts
\`\`\`

The skill becomes a self-loading context bundle. You don't have to re-paste the same background every time.

---

### 7. Use the \`description\` field like a search query

The \`description\` frontmatter isn't just documentation — it's how Claude decides which skill to load when you ask for something without using the exact slash command. Write it as if someone was searching for it:

\`\`\`markdown
description: Review code for quality issues, security vulnerabilities, and style. Use after writing or modifying any code.
\`\`\`

versus:

\`\`\`markdown
description: Code review
\`\`\`

The first one will be found. The second one might not.

---

## The Bookmark Pattern

Here's a pattern I use constantly: the **bookmark**. At the start of a long multi-step skill, I make Claude save its place:

\`\`\`markdown
Before taking any action, output:
"Starting: [skill name] on [date]"
"Current file: [first file you'll touch]"

After completing each major step, output:
"✓ Step N complete: [what you just did]"
\`\`\`

This does two things:
1. You can see exactly where Claude is in a long task
2. If something fails mid-way, you know where to resume

It's the skill equivalent of a checkpoint in a video game.

---

## A Real Example: The Deploy Checker

Here's an actual skill I use before every deploy:

\`\`\`markdown
---
name: pre-deploy
description: Check everything is ready before deploying — runs build, checks for console.logs, verifies env vars
---

You are running a pre-deploy checklist. Go through each step in order.
Stop and report immediately if any step fails — do not continue to the next step.

## Steps

1. Run \`npm run build\` and verify it exits 0
2. Search for \`console.log\` calls in \`src/\` (excluding test files)
3. Check that \`.env.production\` exists and has no placeholder values like \`YOUR_KEY_HERE\`
4. Run \`npm test -- --passWithNoTests\` and verify it passes

## Output format

After all steps pass, output:

**PRE-DEPLOY CHECK: PASSED**
- Build: OK
- Console logs: [count found or "none"]
- Env vars: OK
- Tests: [N passed]

Ready to deploy.

If any step fails, output:

**PRE-DEPLOY CHECK: FAILED**
Step [N] failed: [reason]
Fix this before deploying.
\`\`\`

Clean, explicit, battle-tested. You could run this skill a hundred times and get the same shape of output each time.

---

## Where to Go From Here

The best way to learn what makes a good skill is to use a bad one. Write something rough, run it three times, notice where it goes sideways — then rewrite the rule that covers that case.

The skills that are in my daily rotation all started as terrible first drafts that I slowly fixed by watching Claude misinterpret them.

That's the whole process. Write, run, watch it fail, fix the ambiguity.

Your future self will thank you.

---

*Built this site using Claude Code and a bunch of skills I wrote while procrastinating on actual work. See the source at [github.com/joeloffbeat/joeloffbeat.github.io](https://github.com/joeloffbeat/joeloffbeat.github.io).*
`,GT=`---
title: How to Create Your Own GitHub.io Site
date: 2026-03-14
tags: github, tutorial, web
excerpt: A step-by-step beginner's guide to launching your first GitHub Pages site from scratch.
cover: cover.png
---

# How to Create Your Own GitHub.io Site

GitHub Pages lets you host a website directly from a GitHub repository — for free. In this guide we'll go from zero to a live site at \`https://yourusername.github.io\`.

## What is GitHub Pages?

GitHub Pages is a static site hosting service built into GitHub. Push HTML, CSS, and JavaScript files to a repository, and GitHub publishes them as a live website. No servers, no hosting bills, free HTTPS.

## Step 1: Create a GitHub Account

If you don't have one yet, sign up at [github.com](https://github.com). Choose your username carefully — it becomes part of your site's permanent URL.

## Step 2: Create the Repository

Create a new public repository named **exactly** \`{yourusername}.github.io\`. This naming convention is required by GitHub Pages. Initialise it with a README.

## Step 3: Add Your First Page

Clone the repository locally and create \`index.html\`:

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Site</title>
</head>
<body>
  <h1>Hello from GitHub Pages!</h1>
</body>
</html>
\`\`\`

## Step 4: Enable GitHub Pages

In your repository **Settings → Pages**, set Source to **Deploy from a branch**, select \`main\` and \`/ (root)\`, then save.

## Step 5: Push and Wait

\`\`\`bash
git add index.html
git commit -m "feat: add index.html"
git push
\`\`\`

Wait about 1 minute, then visit \`https://{yourusername}.github.io\`. Done!

## Step 6: Level Up with Vite

For a modern development experience with hot reload and bundling:

\`\`\`bash
npm create vite@latest my-site -- --template vanilla
cd my-site
npm install
npm run dev
\`\`\`

Add \`gh-pages\` for deployment:

\`\`\`bash
npm install --save-dev gh-pages
\`\`\`

Add to \`package.json\`:

\`\`\`json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
\`\`\`

Then \`npm run deploy\` — Vite builds to \`dist/\` and \`gh-pages\` pushes it to a \`gh-pages\` branch that GitHub Pages serves.

## Custom Domain (Optional)

1. Buy a domain from any registrar
2. Add a \`CNAME\` file to your repo root containing your domain (e.g. \`joel.dev\`)
3. In your domain registrar's DNS settings, add \`A\` records pointing to GitHub's Pages IPs (listed in their docs)
4. Enable "Enforce HTTPS" in repo Settings → Pages

Free HTTPS is included — GitHub handles the SSL certificate automatically.

![There is your rock](./baba.jpg)
---

That's it. Your portfolio is live. Start adding your work!
`,zT="/assets/baba-B6G5mPMb.jpg";function fd(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var As=fd();function Vg(s){As=s}var ls={exec:()=>null};function nt(s,e=""){let t=typeof s=="string"?s:s.source,n={replace:(i,r)=>{let a=typeof r=="string"?r:r.source;return a=a.replace(Qt.caret,"$1"),t=t.replace(i,a),n},getRegex:()=>new RegExp(t,e)};return n}var VT=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),Qt={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:s=>new RegExp(`^( {0,3}${s})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:s=>new RegExp(`^ {0,${Math.min(3,s-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:s=>new RegExp(`^ {0,${Math.min(3,s-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:s=>new RegExp(`^ {0,${Math.min(3,s-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:s=>new RegExp(`^ {0,${Math.min(3,s-1)}}#`),htmlBeginRegex:s=>new RegExp(`^ {0,${Math.min(3,s-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:s=>new RegExp(`^ {0,${Math.min(3,s-1)}}>`)},HT=/^(?:[ \t]*(?:\n|$))+/,WT=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,XT=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,za=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,qT=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,pd=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Hg=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Wg=nt(Hg).replace(/bull/g,pd).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),YT=nt(Hg).replace(/bull/g,pd).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),md=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,$T=/^[^\n]+/,gd=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,ZT=nt(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",gd).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),JT=nt(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,pd).getRegex(),Dc="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",_d=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,KT=nt("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",_d).replace("tag",Dc).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Xg=nt(md).replace("hr",za).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Dc).getRegex(),jT=nt(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Xg).getRegex(),xd={blockquote:jT,code:WT,def:ZT,fences:XT,heading:qT,hr:za,html:KT,lheading:Wg,list:JT,newline:HT,paragraph:Xg,table:ls,text:$T},Mp=nt("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",za).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Dc).getRegex(),QT={...xd,lheading:YT,table:Mp,paragraph:nt(md).replace("hr",za).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Mp).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Dc).getRegex()},eA={...xd,html:nt(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",_d).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ls,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:nt(md).replace("hr",za).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Wg).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},tA=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,nA=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,qg=/^( {2,}|\\)\n(?!\s*$)/,iA=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Nc=/[\p{P}\p{S}]/u,yd=/[\s\p{P}\p{S}]/u,Yg=/[^\s\p{P}\p{S}]/u,sA=nt(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,yd).getRegex(),$g=/(?!~)[\p{P}\p{S}]/u,rA=/(?!~)[\s\p{P}\p{S}]/u,aA=/(?:[^\s\p{P}\p{S}]|~)/u,Zg=/(?![*_])[\p{P}\p{S}]/u,oA=/(?![*_])[\s\p{P}\p{S}]/u,lA=/(?:[^\s\p{P}\p{S}]|[*_])/u,cA=nt(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",VT?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Jg=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,hA=nt(Jg,"u").replace(/punct/g,Nc).getRegex(),uA=nt(Jg,"u").replace(/punct/g,$g).getRegex(),Kg="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",dA=nt(Kg,"gu").replace(/notPunctSpace/g,Yg).replace(/punctSpace/g,yd).replace(/punct/g,Nc).getRegex(),fA=nt(Kg,"gu").replace(/notPunctSpace/g,aA).replace(/punctSpace/g,rA).replace(/punct/g,$g).getRegex(),pA=nt("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Yg).replace(/punctSpace/g,yd).replace(/punct/g,Nc).getRegex(),mA=nt(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,Zg).getRegex(),gA="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",_A=nt(gA,"gu").replace(/notPunctSpace/g,lA).replace(/punctSpace/g,oA).replace(/punct/g,Zg).getRegex(),xA=nt(/\\(punct)/,"gu").replace(/punct/g,Nc).getRegex(),yA=nt(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),vA=nt(_d).replace("(?:-->|$)","-->").getRegex(),bA=nt("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",vA).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Xl=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,SA=nt(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",Xl).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),jg=nt(/^!?\[(label)\]\[(ref)\]/).replace("label",Xl).replace("ref",gd).getRegex(),Qg=nt(/^!?\[(ref)\](?:\[\])?/).replace("ref",gd).getRegex(),MA=nt("reflink|nolink(?!\\()","g").replace("reflink",jg).replace("nolink",Qg).getRegex(),wp=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,vd={_backpedal:ls,anyPunctuation:xA,autolink:yA,blockSkip:cA,br:qg,code:nA,del:ls,delLDelim:ls,delRDelim:ls,emStrongLDelim:hA,emStrongRDelimAst:dA,emStrongRDelimUnd:pA,escape:tA,link:SA,nolink:Qg,punctuation:sA,reflink:jg,reflinkSearch:MA,tag:bA,text:iA,url:ls},wA={...vd,link:nt(/^!?\[(label)\]\((.*?)\)/).replace("label",Xl).getRegex(),reflink:nt(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Xl).getRegex()},uu={...vd,emStrongRDelimAst:fA,emStrongLDelim:uA,delLDelim:mA,delRDelim:_A,url:nt(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",wp).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:nt(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",wp).getRegex()},EA={...uu,br:nt(qg).replace("{2,}","*").getRegex(),text:nt(uu.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ko={normal:xd,gfm:QT,pedantic:eA},Hr={normal:vd,gfm:uu,breaks:EA,pedantic:wA},TA={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ep=s=>TA[s];function Xn(s,e){if(e){if(Qt.escapeTest.test(s))return s.replace(Qt.escapeReplace,Ep)}else if(Qt.escapeTestNoEncode.test(s))return s.replace(Qt.escapeReplaceNoEncode,Ep);return s}function Tp(s){try{s=encodeURI(s).replace(Qt.percentDecode,"%")}catch{return null}return s}function Ap(s,e){let t=s.replace(Qt.findPipe,(r,a,o)=>{let l=!1,c=a;for(;--c>=0&&o[c]==="\\";)l=!l;return l?"|":" |"}),n=t.split(Qt.splitPipe),i=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(Qt.slashPipe,"|");return n}function Wr(s,e,t){let n=s.length;if(n===0)return"";let i=0;for(;i<n&&s.charAt(n-i-1)===e;)i++;return s.slice(0,n-i)}function AA(s,e){if(s.indexOf(e[1])===-1)return-1;let t=0;for(let n=0;n<s.length;n++)if(s[n]==="\\")n++;else if(s[n]===e[0])t++;else if(s[n]===e[1]&&(t--,t<0))return n;return t>0?-2:-1}function CA(s,e=0){let t=e,n="";for(let i of s)if(i==="	"){let r=4-t%4;n+=" ".repeat(r),t+=r}else n+=i,t++;return n}function Cp(s,e,t,n,i){let r=e.href,a=e.title||null,o=s[1].replace(i.other.outputLinkReplace,"$1");n.state.inLink=!0;let l={type:s[0].charAt(0)==="!"?"image":"link",raw:t,href:r,title:a,text:o,tokens:n.inlineTokens(o)};return n.state.inLink=!1,l}function RA(s,e,t){let n=s.match(t.other.indentCodeCompensation);if(n===null)return e;let i=n[1];return e.split(`
`).map(r=>{let a=r.match(t.other.beginningSpace);if(a===null)return r;let[o]=a;return o.length>=i.length?r.slice(i.length):r}).join(`
`)}var ql=class{options;rules;lexer;constructor(s){this.options=s||As}space(s){let e=this.rules.block.newline.exec(s);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(s){let e=this.rules.block.code.exec(s);if(e){let t=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:Wr(t,`
`)}}}fences(s){let e=this.rules.block.fences.exec(s);if(e){let t=e[0],n=RA(t,e[3]||"",this.rules);return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:n}}}heading(s){let e=this.rules.block.heading.exec(s);if(e){let t=e[2].trim();if(this.rules.other.endingHash.test(t)){let n=Wr(t,"#");(this.options.pedantic||!n||this.rules.other.endingSpaceChar.test(n))&&(t=n.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(s){let e=this.rules.block.hr.exec(s);if(e)return{type:"hr",raw:Wr(e[0],`
`)}}blockquote(s){let e=this.rules.block.blockquote.exec(s);if(e){let t=Wr(e[0],`
`).split(`
`),n="",i="",r=[];for(;t.length>0;){let a=!1,o=[],l;for(l=0;l<t.length;l++)if(this.rules.other.blockquoteStart.test(t[l]))o.push(t[l]),a=!0;else if(!a)o.push(t[l]);else break;t=t.slice(l);let c=o.join(`
`),h=c.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");n=n?`${n}
${c}`:c,i=i?`${i}
${h}`:h;let u=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(h,r,!0),this.lexer.state.top=u,t.length===0)break;let d=r.at(-1);if(d?.type==="code")break;if(d?.type==="blockquote"){let f=d,p=f.raw+`
`+t.join(`
`),_=this.blockquote(p);r[r.length-1]=_,n=n.substring(0,n.length-f.raw.length)+_.raw,i=i.substring(0,i.length-f.text.length)+_.text;break}else if(d?.type==="list"){let f=d,p=f.raw+`
`+t.join(`
`),_=this.list(p);r[r.length-1]=_,n=n.substring(0,n.length-d.raw.length)+_.raw,i=i.substring(0,i.length-f.raw.length)+_.raw,t=p.substring(r.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:n,tokens:r,text:i}}}list(s){let e=this.rules.block.list.exec(s);if(e){let t=e[1].trim(),n=t.length>1,i={type:"list",raw:"",ordered:n,start:n?+t.slice(0,-1):"",loose:!1,items:[]};t=n?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=n?t:"[*+-]");let r=this.rules.other.listItemRegex(t),a=!1;for(;s;){let l=!1,c="",h="";if(!(e=r.exec(s))||this.rules.block.hr.test(s))break;c=e[0],s=s.substring(c.length);let u=CA(e[2].split(`
`,1)[0],e[1].length),d=s.split(`
`,1)[0],f=!u.trim(),p=0;if(this.options.pedantic?(p=2,h=u.trimStart()):f?p=e[1].length+1:(p=u.search(this.rules.other.nonSpaceChar),p=p>4?1:p,h=u.slice(p),p+=e[1].length),f&&this.rules.other.blankLine.test(d)&&(c+=d+`
`,s=s.substring(d.length+1),l=!0),!l){let _=this.rules.other.nextBulletRegex(p),g=this.rules.other.hrRegex(p),m=this.rules.other.fencesBeginRegex(p),x=this.rules.other.headingBeginRegex(p),y=this.rules.other.htmlBeginRegex(p),b=this.rules.other.blockquoteBeginRegex(p);for(;s;){let w=s.split(`
`,1)[0],T;if(d=w,this.options.pedantic?(d=d.replace(this.rules.other.listReplaceNesting,"  "),T=d):T=d.replace(this.rules.other.tabCharGlobal,"    "),m.test(d)||x.test(d)||y.test(d)||b.test(d)||_.test(d)||g.test(d))break;if(T.search(this.rules.other.nonSpaceChar)>=p||!d.trim())h+=`
`+T.slice(p);else{if(f||u.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||m.test(u)||x.test(u)||g.test(u))break;h+=`
`+d}f=!d.trim(),c+=w+`
`,s=s.substring(w.length+1),u=T.slice(p)}}i.loose||(a?i.loose=!0:this.rules.other.doubleBlankLine.test(c)&&(a=!0)),i.items.push({type:"list_item",raw:c,task:!!this.options.gfm&&this.rules.other.listIsTask.test(h),loose:!1,text:h,tokens:[]}),i.raw+=c}let o=i.items.at(-1);if(o)o.raw=o.raw.trimEnd(),o.text=o.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let l of i.items){if(this.lexer.state.top=!1,l.tokens=this.lexer.blockTokens(l.text,[]),l.task){if(l.text=l.text.replace(this.rules.other.listReplaceTask,""),l.tokens[0]?.type==="text"||l.tokens[0]?.type==="paragraph"){l.tokens[0].raw=l.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),l.tokens[0].text=l.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let h=this.lexer.inlineQueue.length-1;h>=0;h--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[h].src)){this.lexer.inlineQueue[h].src=this.lexer.inlineQueue[h].src.replace(this.rules.other.listReplaceTask,"");break}}let c=this.rules.other.listTaskCheckbox.exec(l.raw);if(c){let h={type:"checkbox",raw:c[0]+" ",checked:c[0]!=="[ ]"};l.checked=h.checked,i.loose?l.tokens[0]&&["paragraph","text"].includes(l.tokens[0].type)&&"tokens"in l.tokens[0]&&l.tokens[0].tokens?(l.tokens[0].raw=h.raw+l.tokens[0].raw,l.tokens[0].text=h.raw+l.tokens[0].text,l.tokens[0].tokens.unshift(h)):l.tokens.unshift({type:"paragraph",raw:h.raw,text:h.raw,tokens:[h]}):l.tokens.unshift(h)}}if(!i.loose){let c=l.tokens.filter(u=>u.type==="space"),h=c.length>0&&c.some(u=>this.rules.other.anyLine.test(u.raw));i.loose=h}}if(i.loose)for(let l of i.items){l.loose=!0;for(let c of l.tokens)c.type==="text"&&(c.type="paragraph")}return i}}html(s){let e=this.rules.block.html.exec(s);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(s){let e=this.rules.block.def.exec(s);if(e){let t=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),n=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:e[0],href:n,title:i}}}table(s){let e=this.rules.block.table.exec(s);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let t=Ap(e[1]),n=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],r={type:"table",raw:e[0],header:[],align:[],rows:[]};if(t.length===n.length){for(let a of n)this.rules.other.tableAlignRight.test(a)?r.align.push("right"):this.rules.other.tableAlignCenter.test(a)?r.align.push("center"):this.rules.other.tableAlignLeft.test(a)?r.align.push("left"):r.align.push(null);for(let a=0;a<t.length;a++)r.header.push({text:t[a],tokens:this.lexer.inline(t[a]),header:!0,align:r.align[a]});for(let a of i)r.rows.push(Ap(a,r.header.length).map((o,l)=>({text:o,tokens:this.lexer.inline(o),header:!1,align:r.align[l]})));return r}}lheading(s){let e=this.rules.block.lheading.exec(s);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(s){let e=this.rules.block.paragraph.exec(s);if(e){let t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(s){let e=this.rules.block.text.exec(s);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(s){let e=this.rules.inline.escape.exec(s);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(s){let e=this.rules.inline.tag.exec(s);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(s){let e=this.rules.inline.link.exec(s);if(e){let t=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(t)){if(!this.rules.other.endAngleBracket.test(t))return;let r=Wr(t.slice(0,-1),"\\");if((t.length-r.length)%2===0)return}else{let r=AA(e[2],"()");if(r===-2)return;if(r>-1){let a=(e[0].indexOf("!")===0?5:4)+e[1].length+r;e[2]=e[2].substring(0,r),e[0]=e[0].substring(0,a).trim(),e[3]=""}}let n=e[2],i="";if(this.options.pedantic){let r=this.rules.other.pedanticHrefTitle.exec(n);r&&(n=r[1],i=r[3])}else i=e[3]?e[3].slice(1,-1):"";return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(t)?n=n.slice(1):n=n.slice(1,-1)),Cp(e,{href:n&&n.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(s,e){let t;if((t=this.rules.inline.reflink.exec(s))||(t=this.rules.inline.nolink.exec(s))){let n=(t[2]||t[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=e[n.toLowerCase()];if(!i){let r=t[0].charAt(0);return{type:"text",raw:r,text:r}}return Cp(t,i,t[0],this.lexer,this.rules)}}emStrong(s,e,t=""){let n=this.rules.inline.emStrongLDelim.exec(s);if(!(!n||n[3]&&t.match(this.rules.other.unicodeAlphaNumeric))&&(!(n[1]||n[2])||!t||this.rules.inline.punctuation.exec(t))){let i=[...n[0]].length-1,r,a,o=i,l=0,c=n[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,e=e.slice(-1*s.length+i);(n=c.exec(e))!=null;){if(r=n[1]||n[2]||n[3]||n[4]||n[5]||n[6],!r)continue;if(a=[...r].length,n[3]||n[4]){o+=a;continue}else if((n[5]||n[6])&&i%3&&!((i+a)%3)){l+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o+l);let h=[...n[0]][0].length,u=s.slice(0,i+n.index+h+a);if(Math.min(i,a)%2){let f=u.slice(1,-1);return{type:"em",raw:u,text:f,tokens:this.lexer.inlineTokens(f)}}let d=u.slice(2,-2);return{type:"strong",raw:u,text:d,tokens:this.lexer.inlineTokens(d)}}}}codespan(s){let e=this.rules.inline.code.exec(s);if(e){let t=e[2].replace(this.rules.other.newLineCharGlobal," "),n=this.rules.other.nonSpaceChar.test(t),i=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return n&&i&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:e[0],text:t}}}br(s){let e=this.rules.inline.br.exec(s);if(e)return{type:"br",raw:e[0]}}del(s,e,t=""){let n=this.rules.inline.delLDelim.exec(s);if(n&&(!n[1]||!t||this.rules.inline.punctuation.exec(t))){let i=[...n[0]].length-1,r,a,o=i,l=this.rules.inline.delRDelim;for(l.lastIndex=0,e=e.slice(-1*s.length+i);(n=l.exec(e))!=null;){if(r=n[1]||n[2]||n[3]||n[4]||n[5]||n[6],!r||(a=[...r].length,a!==i))continue;if(n[3]||n[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let c=[...n[0]][0].length,h=s.slice(0,i+n.index+c+a),u=h.slice(i,-i);return{type:"del",raw:h,text:u,tokens:this.lexer.inlineTokens(u)}}}}autolink(s){let e=this.rules.inline.autolink.exec(s);if(e){let t,n;return e[2]==="@"?(t=e[1],n="mailto:"+t):(t=e[1],n=t),{type:"link",raw:e[0],text:t,href:n,tokens:[{type:"text",raw:t,text:t}]}}}url(s){let e;if(e=this.rules.inline.url.exec(s)){let t,n;if(e[2]==="@")t=e[0],n="mailto:"+t;else{let i;do i=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(i!==e[0]);t=e[0],e[1]==="www."?n="http://"+e[0]:n=e[0]}return{type:"link",raw:e[0],text:t,href:n,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(s){let e=this.rules.inline.text.exec(s);if(e){let t=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:t}}}},Dn=class du{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||As,this.options.tokenizer=this.options.tokenizer||new ql,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:Qt,block:ko.normal,inline:Hr.normal};this.options.pedantic?(t.block=ko.pedantic,t.inline=Hr.pedantic):this.options.gfm&&(t.block=ko.gfm,this.options.breaks?t.inline=Hr.breaks:t.inline=Hr.gfm),this.tokenizer.rules=t}static get rules(){return{block:ko,inline:Hr}}static lex(e,t){return new du(t).lex(e)}static lexInline(e,t){return new du(t).inlineTokens(e)}lex(e){e=e.replace(Qt.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){let n=this.inlineQueue[t];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){for(this.options.pedantic&&(e=e.replace(Qt.tabCharGlobal,"    ").replace(Qt.spaceLine,""));e;){let i;if(this.options.extensions?.block?.some(a=>(i=a.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let a=t.at(-1);i.raw.length===1&&a!==void 0?a.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let a=t.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.at(-1).src=a.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let a=t.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.raw,this.inlineQueue.at(-1).src=a.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},t.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}let r=e;if(this.options.extensions?.startBlock){let a=1/0,o=e.slice(1),l;this.options.extensions.startBlock.forEach(c=>{l=c.call({lexer:this},o),typeof l=="number"&&l>=0&&(a=Math.min(a,l))}),a<1/0&&a>=0&&(r=e.substring(0,a+1))}if(this.state.top&&(i=this.tokenizer.paragraph(r))){let a=t.at(-1);n&&a?.type==="paragraph"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):t.push(i),n=r.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let a=t.at(-1);a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):t.push(i);continue}if(e){let a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n=e,i=null;if(this.tokens.links){let l=Object.keys(this.tokens.links);if(l.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(n))!=null;)l.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(n=n.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.anyPunctuation.exec(n))!=null;)n=n.slice(0,i.index)+"++"+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let r;for(;(i=this.tokenizer.rules.inline.blockSkip.exec(n))!=null;)r=i[2]?i[2].length:0,n=n.slice(0,i.index+r)+"["+"a".repeat(i[0].length-r-2)+"]"+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let a=!1,o="";for(;e;){a||(o=""),a=!1;let l;if(this.options.extensions?.inline?.some(h=>(l=h.call({lexer:this},e,t))?(e=e.substring(l.raw.length),t.push(l),!0):!1))continue;if(l=this.tokenizer.escape(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.tag(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.link(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(l.raw.length);let h=t.at(-1);l.type==="text"&&h?.type==="text"?(h.raw+=l.raw,h.text+=l.text):t.push(l);continue}if(l=this.tokenizer.emStrong(e,n,o)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.codespan(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.br(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.del(e,n,o)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.autolink(e)){e=e.substring(l.raw.length),t.push(l);continue}if(!this.state.inLink&&(l=this.tokenizer.url(e))){e=e.substring(l.raw.length),t.push(l);continue}let c=e;if(this.options.extensions?.startInline){let h=1/0,u=e.slice(1),d;this.options.extensions.startInline.forEach(f=>{d=f.call({lexer:this},u),typeof d=="number"&&d>=0&&(h=Math.min(h,d))}),h<1/0&&h>=0&&(c=e.substring(0,h+1))}if(l=this.tokenizer.inlineText(c)){e=e.substring(l.raw.length),l.raw.slice(-1)!=="_"&&(o=l.raw.slice(-1)),a=!0;let h=t.at(-1);h?.type==="text"?(h.raw+=l.raw,h.text+=l.text):t.push(l);continue}if(e){let h="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(h);break}else throw new Error(h)}}return t}},Yl=class{options;parser;constructor(s){this.options=s||As}space(s){return""}code({text:s,lang:e,escaped:t}){let n=(e||"").match(Qt.notSpaceStart)?.[0],i=s.replace(Qt.endingNewline,"")+`
`;return n?'<pre><code class="language-'+Xn(n)+'">'+(t?i:Xn(i,!0))+`</code></pre>
`:"<pre><code>"+(t?i:Xn(i,!0))+`</code></pre>
`}blockquote({tokens:s}){return`<blockquote>
${this.parser.parse(s)}</blockquote>
`}html({text:s}){return s}def(s){return""}heading({tokens:s,depth:e}){return`<h${e}>${this.parser.parseInline(s)}</h${e}>
`}hr(s){return`<hr>
`}list(s){let e=s.ordered,t=s.start,n="";for(let a=0;a<s.items.length;a++){let o=s.items[a];n+=this.listitem(o)}let i=e?"ol":"ul",r=e&&t!==1?' start="'+t+'"':"";return"<"+i+r+`>
`+n+"</"+i+`>
`}listitem(s){return`<li>${this.parser.parse(s.tokens)}</li>
`}checkbox({checked:s}){return"<input "+(s?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:s}){return`<p>${this.parser.parseInline(s)}</p>
`}table(s){let e="",t="";for(let i=0;i<s.header.length;i++)t+=this.tablecell(s.header[i]);e+=this.tablerow({text:t});let n="";for(let i=0;i<s.rows.length;i++){let r=s.rows[i];t="";for(let a=0;a<r.length;a++)t+=this.tablecell(r[a]);n+=this.tablerow({text:t})}return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+n+`</table>
`}tablerow({text:s}){return`<tr>
${s}</tr>
`}tablecell(s){let e=this.parser.parseInline(s.tokens),t=s.header?"th":"td";return(s.align?`<${t} align="${s.align}">`:`<${t}>`)+e+`</${t}>
`}strong({tokens:s}){return`<strong>${this.parser.parseInline(s)}</strong>`}em({tokens:s}){return`<em>${this.parser.parseInline(s)}</em>`}codespan({text:s}){return`<code>${Xn(s,!0)}</code>`}br(s){return"<br>"}del({tokens:s}){return`<del>${this.parser.parseInline(s)}</del>`}link({href:s,title:e,tokens:t}){let n=this.parser.parseInline(t),i=Tp(s);if(i===null)return n;s=i;let r='<a href="'+s+'"';return e&&(r+=' title="'+Xn(e)+'"'),r+=">"+n+"</a>",r}image({href:s,title:e,text:t,tokens:n}){n&&(t=this.parser.parseInline(n,this.parser.textRenderer));let i=Tp(s);if(i===null)return Xn(t);s=i;let r=`<img src="${s}" alt="${Xn(t)}"`;return e&&(r+=` title="${Xn(e)}"`),r+=">",r}text(s){return"tokens"in s&&s.tokens?this.parser.parseInline(s.tokens):"escaped"in s&&s.escaped?s.text:Xn(s.text)}},bd=class{strong({text:s}){return s}em({text:s}){return s}codespan({text:s}){return s}del({text:s}){return s}html({text:s}){return s}text({text:s}){return s}link({text:s}){return""+s}image({text:s}){return""+s}br(){return""}checkbox({raw:s}){return s}},Nn=class fu{options;renderer;textRenderer;constructor(e){this.options=e||As,this.options.renderer=this.options.renderer||new Yl,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new bd}static parse(e,t){return new fu(t).parse(e)}static parseInline(e,t){return new fu(t).parseInline(e)}parse(e){let t="";for(let n=0;n<e.length;n++){let i=e[n];if(this.options.extensions?.renderers?.[i.type]){let a=i,o=this.options.extensions.renderers[a.type].call({parser:this},a);if(o!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(a.type)){t+=o||"";continue}}let r=i;switch(r.type){case"space":{t+=this.renderer.space(r);break}case"hr":{t+=this.renderer.hr(r);break}case"heading":{t+=this.renderer.heading(r);break}case"code":{t+=this.renderer.code(r);break}case"table":{t+=this.renderer.table(r);break}case"blockquote":{t+=this.renderer.blockquote(r);break}case"list":{t+=this.renderer.list(r);break}case"checkbox":{t+=this.renderer.checkbox(r);break}case"html":{t+=this.renderer.html(r);break}case"def":{t+=this.renderer.def(r);break}case"paragraph":{t+=this.renderer.paragraph(r);break}case"text":{t+=this.renderer.text(r);break}default:{let a='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return t}parseInline(e,t=this.renderer){let n="";for(let i=0;i<e.length;i++){let r=e[i];if(this.options.extensions?.renderers?.[r.type]){let o=this.options.extensions.renderers[r.type].call({parser:this},r);if(o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type)){n+=o||"";continue}}let a=r;switch(a.type){case"escape":{n+=t.text(a);break}case"html":{n+=t.html(a);break}case"link":{n+=t.link(a);break}case"image":{n+=t.image(a);break}case"checkbox":{n+=t.checkbox(a);break}case"strong":{n+=t.strong(a);break}case"em":{n+=t.em(a);break}case"codespan":{n+=t.codespan(a);break}case"br":{n+=t.br(a);break}case"del":{n+=t.del(a);break}case"text":{n+=t.text(a);break}default:{let o='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return n}},Jr=class{options;block;constructor(s){this.options=s||As}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(s){return s}postprocess(s){return s}processAllTokens(s){return s}emStrongMask(s){return s}provideLexer(){return this.block?Dn.lex:Dn.lexInline}provideParser(){return this.block?Nn.parse:Nn.parseInline}},IA=class{defaults=fd();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Nn;Renderer=Yl;TextRenderer=bd;Lexer=Dn;Tokenizer=ql;Hooks=Jr;constructor(...s){this.use(...s)}walkTokens(s,e){let t=[];for(let n of s)switch(t=t.concat(e.call(this,n)),n.type){case"table":{let i=n;for(let r of i.header)t=t.concat(this.walkTokens(r.tokens,e));for(let r of i.rows)for(let a of r)t=t.concat(this.walkTokens(a.tokens,e));break}case"list":{let i=n;t=t.concat(this.walkTokens(i.items,e));break}default:{let i=n;this.defaults.extensions?.childTokens?.[i.type]?this.defaults.extensions.childTokens[i.type].forEach(r=>{let a=i[r].flat(1/0);t=t.concat(this.walkTokens(a,e))}):i.tokens&&(t=t.concat(this.walkTokens(i.tokens,e)))}}return t}use(...s){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return s.forEach(t=>{let n={...t};if(n.async=this.defaults.async||n.async||!1,t.extensions&&(t.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){let r=e.renderers[i.name];r?e.renderers[i.name]=function(...a){let o=i.renderer.apply(this,a);return o===!1&&(o=r.apply(this,a)),o}:e.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let r=e[i.level];r?r.unshift(i.tokenizer):e[i.level]=[i.tokenizer],i.start&&(i.level==="block"?e.startBlock?e.startBlock.push(i.start):e.startBlock=[i.start]:i.level==="inline"&&(e.startInline?e.startInline.push(i.start):e.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(e.childTokens[i.name]=i.childTokens)}),n.extensions=e),t.renderer){let i=this.defaults.renderer||new Yl(this.defaults);for(let r in t.renderer){if(!(r in i))throw new Error(`renderer '${r}' does not exist`);if(["options","parser"].includes(r))continue;let a=r,o=t.renderer[a],l=i[a];i[a]=(...c)=>{let h=o.apply(i,c);return h===!1&&(h=l.apply(i,c)),h||""}}n.renderer=i}if(t.tokenizer){let i=this.defaults.tokenizer||new ql(this.defaults);for(let r in t.tokenizer){if(!(r in i))throw new Error(`tokenizer '${r}' does not exist`);if(["options","rules","lexer"].includes(r))continue;let a=r,o=t.tokenizer[a],l=i[a];i[a]=(...c)=>{let h=o.apply(i,c);return h===!1&&(h=l.apply(i,c)),h}}n.tokenizer=i}if(t.hooks){let i=this.defaults.hooks||new Jr;for(let r in t.hooks){if(!(r in i))throw new Error(`hook '${r}' does not exist`);if(["options","block"].includes(r))continue;let a=r,o=t.hooks[a],l=i[a];Jr.passThroughHooks.has(r)?i[a]=c=>{if(this.defaults.async&&Jr.passThroughHooksRespectAsync.has(r))return(async()=>{let u=await o.call(i,c);return l.call(i,u)})();let h=o.call(i,c);return l.call(i,h)}:i[a]=(...c)=>{if(this.defaults.async)return(async()=>{let u=await o.apply(i,c);return u===!1&&(u=await l.apply(i,c)),u})();let h=o.apply(i,c);return h===!1&&(h=l.apply(i,c)),h}}n.hooks=i}if(t.walkTokens){let i=this.defaults.walkTokens,r=t.walkTokens;n.walkTokens=function(a){let o=[];return o.push(r.call(this,a)),i&&(o=o.concat(i.call(this,a))),o}}this.defaults={...this.defaults,...n}}),this}setOptions(s){return this.defaults={...this.defaults,...s},this}lexer(s,e){return Dn.lex(s,e??this.defaults)}parser(s,e){return Nn.parse(s,e??this.defaults)}parseMarkdown(s){return(e,t)=>{let n={...t},i={...this.defaults,...n},r=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&n.async===!1)return r(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return r(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return r(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(i.hooks&&(i.hooks.options=i,i.hooks.block=s),i.async)return(async()=>{let a=i.hooks?await i.hooks.preprocess(e):e,o=await(i.hooks?await i.hooks.provideLexer():s?Dn.lex:Dn.lexInline)(a,i),l=i.hooks?await i.hooks.processAllTokens(o):o;i.walkTokens&&await Promise.all(this.walkTokens(l,i.walkTokens));let c=await(i.hooks?await i.hooks.provideParser():s?Nn.parse:Nn.parseInline)(l,i);return i.hooks?await i.hooks.postprocess(c):c})().catch(r);try{i.hooks&&(e=i.hooks.preprocess(e));let a=(i.hooks?i.hooks.provideLexer():s?Dn.lex:Dn.lexInline)(e,i);i.hooks&&(a=i.hooks.processAllTokens(a)),i.walkTokens&&this.walkTokens(a,i.walkTokens);let o=(i.hooks?i.hooks.provideParser():s?Nn.parse:Nn.parseInline)(a,i);return i.hooks&&(o=i.hooks.postprocess(o)),o}catch(a){return r(a)}}}onError(s,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,s){let n="<p>An error occurred:</p><pre>"+Xn(t.message+"",!0)+"</pre>";return e?Promise.resolve(n):n}if(e)return Promise.reject(t);throw t}}},Ss=new IA;function ht(s,e){return Ss.parse(s,e)}ht.options=ht.setOptions=function(s){return Ss.setOptions(s),ht.defaults=Ss.defaults,Vg(ht.defaults),ht};ht.getDefaults=fd;ht.defaults=As;ht.use=function(...s){return Ss.use(...s),ht.defaults=Ss.defaults,Vg(ht.defaults),ht};ht.walkTokens=function(s,e){return Ss.walkTokens(s,e)};ht.parseInline=Ss.parseInline;ht.Parser=Nn;ht.parser=Nn.parse;ht.Renderer=Yl;ht.TextRenderer=bd;ht.Lexer=Dn;ht.lexer=Dn.lex;ht.Tokenizer=ql;ht.Hooks=Jr;ht.parse=ht;ht.options;ht.setOptions;ht.use;ht.walkTokens;ht.parseInline;Nn.parse;Dn.lex;const PA={place:"Chennai",dates:"Forever i guess",flag:"📍",notes:"Where do you want me to move next?"},LA=[{place:"Bengaluru, India",dates:"April Start, 2026",flag:"🇮🇳",status:"Maybe",notes:"Cherry blossom season"},{place:"Vietnam",dates:"June 2026",flag:"🇻🇳",status:"Confirmed",notes:"Experience the vibrant lantern festival"}],DA=[{place:"Sivakasi, India",dates:"Feb 2026",flag:"🇮🇳",status:"Visited",notes:"Sundeep's marriage"},{place:"Delhi, India",dates:"March 2026",flag:"🇮🇳",status:"Visited",notes:"US Visa"}],NA={current:PA,upcoming:LA,past:DA},Rp=[{title:"Dune",year:2021,genre:"Sci-Fi",rating:5,cover:"",notes:"Visually stunning"}],Ip=[{title:"The Alchemist",author:"Paulo Coelho",year:1988,genre:"Fiction",rating:5,cover:"",notes:"Deep and hopeful"}],UA=Object.assign({"/_arts/caricatures/ajay.png":gT,"/_arts/caricatures/amma.png":_T,"/_arts/caricatures/gabriel.png":xT,"/_arts/caricatures/kamalam.png":yT,"/_arts/caricatures/kausik.png":vT,"/_arts/caricatures/neha.png":bT,"/_arts/caricatures/nila.png":ST,"/_arts/caricatures/pappa_mummy.png":MT,"/_arts/caricatures/prakash.png":wT,"/_arts/caricatures/rashmi.png":ET,"/_arts/caricatures/roona.png":TT,"/_arts/caricatures/self.png":AT,"/_arts/caricatures/shirley.png":CT,"/_arts/caricatures/siva.png":RT,"/_arts/doodles/faces_of_neha.png":IT,"/_arts/doodles/friends.png":PT,"/_arts/doodles/personalities_of_neha.png":LT,"/_arts/doodles/teachers.png":DT,"/_arts/illustrations/mika.png":NT,"/_arts/illustrations/neha_hammock.png":UT,"/_arts/illustrations/neha_pole.png":FT,"/_arts/illustrations/rinibot.png":OT,"/_arts/illustrations/the_girl.png":kT}),FA=Object.assign({"/_posts/claude-code-skills-guide/index.md":BT,"/_posts/github-io-guide/index.md":GT}),OA=Object.assign({"/_posts/github-io-guide/baba.jpg":zT});function kA(s){const e=s.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);if(!e)return{meta:{},body:s};const t={};for(const n of e[1].split(/\r?\n/)){const i=n.indexOf(":");if(i===-1)continue;const r=n.slice(0,i).trim(),a=n.slice(i+1).trim().replace(/^["'](.*)["']$/,"$1");r&&(t[r]=a)}return{meta:t,body:e[2]}}function BA(){const s={};for(const[e,t]of Object.entries(UA)){const n=e.split("/"),i=n[n.length-2],r=n[n.length-1];s[i]||(s[i]=[]),s[i].push({filename:r,url:t})}return Object.entries(s).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>({name:e,displayName:e.replace(/[-_]/g," ").replace(/\b\w/g,n=>n.toUpperCase()),images:t}))}function GA(){const s=[];for(const[e,t]of Object.entries(FA)){const n=e.split("/").slice(-2)[0],{meta:i,body:r}=kA(t),a={};for(const[l,c]of Object.entries(OA)){const h=l.split("/");h[h.length-2]===n&&(a[h[h.length-1]]=c)}let o=ht.parse(r);o=o.replace(/src="\.\/([^"]+)"/g,(l,c)=>{const h=a[c];return h?`src="${h}"`:l}),s.push({slug:n,meta:i,html:o,imageUrls:a})}return s.sort((e,t)=>new Date(t.meta.date||0)-new Date(e.meta.date||0))}const Qs=BA(),Bo=GA();function at(s){return String(s??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function pu(s){try{const e=new URL(s);if(e.protocol==="https:"||e.protocol==="mailto:")return s}catch{}return"#"}function zA(){if(Qs.length===0)return{title:"🎨 Art Gallery",html:'<div class="overlay-loading">No artwork yet. Add images to _arts/ subfolders.</div>'};const s=Qs.map((t,n)=>`<button class="tab-btn${n===0?" active":""}" data-tab="${n}">${t.displayName}</button>`).join(""),e=Qs.map((t,n)=>`
            <div class="tab-panel${n===0?"":" tab-panel-hidden"}" data-panel="${n}">
                <div class="art-grid" data-category="${n}"></div>
                <div class="pagination" data-category="${n}" style="display:none">
                    <button class="page-btn" data-action="prev" data-cat="${n}">&#8592; Prev</button>
                    <span class="page-info" data-category="${n}"></span>
                    <button class="page-btn" data-action="next" data-cat="${n}">Next &#8594;</button>
                </div>
            </div>`).join("");return{title:"🎨 Art Gallery",html:`<div class="tab-bar">${s}</div>${e}`,onReady:t=>{const i=(t.querySelector(".art-grid")?.offsetWidth||window.innerWidth*.8)-8,r=window.innerHeight*.68-60,a=Math.max(2,Math.floor(i/155)),o=Math.max(2,Math.floor(r/185)),l=a*o,c=Qs.map(()=>0);let h=0;function u(p){const _=Qs[p],g=c[p],m=_.images.length,x=Math.max(1,Math.ceil(m/l)),y=_.images.slice(g*l,(g+1)*l),b=t.querySelector(`.art-grid[data-category="${p}"]`),w=t.querySelector(`.pagination[data-category="${p}"]`),T=t.querySelector(`.page-info[data-category="${p}"]`);b.innerHTML=y.map(S=>{const M=S.filename.replace(/\.[^.]+$/,"").replace(/[-_]/g," ");return`<div class="art-item" style="background-image:url(${S.url})" data-url="${at(S.url)}" data-caption="${at(M)}">
                        <div class="art-caption">${M}</div>
                    </div>`}).join("");const R=w.querySelector(`[data-action="prev"][data-cat="${p}"]`),P=w.querySelector(`[data-action="next"][data-cat="${p}"]`);m>l?(w.style.display="flex",T.textContent=`Page ${g+1} of ${x}`,R.style.visibility=g===0?"hidden":"visible",P.style.visibility=g>=x-1?"hidden":"visible"):w.style.display="none"}function d(p,_){t.innerHTML=`
                    <button class="blog-back" data-action="art-back">&#8592; Back to Gallery</button>
                    <div class="art-lightbox">
                        <img class="art-lightbox-img" src="${at(p)}" alt="${at(_)}">
                        ${_?`<div class="art-lightbox-caption">${at(_)}</div>`:""}
                    </div>`}function f(){t.innerHTML=`<div class="tab-bar">${s}</div>${e}`,h!==0&&(t.querySelectorAll(".tab-btn").forEach(p=>p.classList.remove("active")),t.querySelector(`.tab-btn[data-tab="${h}"]`).classList.add("active"),t.querySelectorAll(".tab-panel").forEach(p=>p.classList.add("tab-panel-hidden")),t.querySelector(`.tab-panel[data-panel="${h}"]`).classList.remove("tab-panel-hidden")),u(h)}u(0),t.addEventListener("click",p=>{if(p.target.closest('[data-action="art-back"]')){f();return}const _=p.target.closest(".tab-btn");if(_){const x=parseInt(_.dataset.tab);h=x,t.querySelectorAll(".tab-btn").forEach(y=>y.classList.remove("active")),_.classList.add("active"),t.querySelectorAll(".tab-panel").forEach(y=>y.classList.add("tab-panel-hidden")),t.querySelector(`.tab-panel[data-panel="${x}"]`).classList.remove("tab-panel-hidden"),u(x);return}const g=p.target.closest(".page-btn");if(g&&!g.disabled){const x=parseInt(g.dataset.cat),y=Qs[x].images.length,b=Math.ceil(y/l);g.dataset.action==="prev"&&c[x]>0&&c[x]--,g.dataset.action==="next"&&c[x]<b-1&&c[x]++,u(x);return}const m=p.target.closest(".art-item");m&&d(m.dataset.url,m.dataset.caption)})}}}function VA(){return{title:"🖥️ Tech Blog",html:'<div class="blog-list"></div>',onReady:s=>{let t=0;function n(r){t=r;const a=Bo.length,o=Math.max(1,Math.ceil(a/5)),c=Bo.slice(r*5,(r+1)*5).map(u=>`
                    <div class="blog-entry">
                        <div class="card-title">${at(u.meta.title||"Untitled")}</div>
                        <div class="card-meta">${at(u.meta.date||"")}${u.meta.tags?" &middot; "+at(u.meta.tags):""}</div>
                        <p class="blog-excerpt">${at(u.meta.excerpt||"")}</p>
                        <button class="blog-link" data-action="read" data-slug="${at(u.slug)}">Read more &#8594;</button>
                    </div>`).join(""),h=a>5?`
                    <div class="pagination">
                        <button class="page-btn" data-action="prev-page" ${r===0?"disabled":""}>&#8592; Prev</button>
                        <span>Page ${r+1} of ${o}</span>
                        <button class="page-btn" data-action="next-page" ${r>=o-1?"disabled":""}>Next &#8594;</button>
                    </div>`:"";s.innerHTML=`<div class="blog-list">${c}</div>${h}`}function i(r){const a=Bo.find(o=>o.slug===r);if(!a){n(t);return}s.innerHTML=`
                    <button class="blog-back" data-action="back">&#8592; Back</button>
                    <div class="blog-post-content">${a.html}</div>`}s.addEventListener("click",r=>{const a=r.target.closest("[data-action]");if(!a)return;const o=a.dataset.action;if(o==="read"){i(a.dataset.slug);return}if(o==="back"){n(t);return}const l=Math.ceil(Bo.length/5);if(o==="prev-page"&&t>0){n(t-1);return}o==="next-page"&&t<l-1&&n(t+1)}),n(0)}}}function HA(){const s=NA;function e(n,i=!1){return`
            <div class="travel-card">
                <span class="travel-flag">${at(n.flag||"")}</span>
                <div class="travel-info">
                    <div class="card-title">${at(n.place)}</div>
                    <div class="card-meta">${at(n.dates)}</div>
                    ${i&&n.status?`<span class="travel-badge travel-badge-${at(n.status)}">${at(n.status)}</span>`:""}
                    ${n.notes?`<div class="card-meta" style="margin-top:4px;color:#aaa">${at(n.notes)}</div>`:""}
                </div>
            </div>`}let t="";return s.current&&(t+=`<div class="travel-section travel-current"><h3>📍 Now</h3>${e(s.current)}</div>`),s.upcoming?.length&&(t+=`<div class="travel-section"><h3>✈️ Coming Up</h3>${s.upcoming.map(n=>e(n,!0)).join("")}</div>`),s.past?.length&&(t+=`<div class="travel-section"><h3>🗺️ Been There</h3>${s.past.map(n=>e(n)).join("")}</div>`),{title:"🚗 Travel Plans",html:t}}const Pp={JavaScript:"#f1e05a",TypeScript:"#3178c6",Python:"#3572A5",Rust:"#dea584",Go:"#00add8",Dart:"#00b4ab",default:"#888"},WA=[{name:"joeloffbeat.github.io",description:"Isometric pixel-art portfolio built with Three.js",language:"JavaScript",stargazers_count:0,html_url:"https://github.com/joeloffbeat/joeloffbeat.github.io"}],Lp=["joeloffbeat.github.io"],XA=[];function Dp(s){return s.filter(e=>XA.includes(e.name)?!1:Lp.length>0?Lp.includes(e.name):!0)}let Lh=null;async function qA(){let s=Dp(WA),e="";try{if(!Lh){const n=await fetch("https://api.github.com/users/joeloffbeat/repos?sort=updated&per_page=100&type=public");if(!n.ok){const i=n.status===403&&n.headers.get("X-RateLimit-Remaining")==="0";throw new Error(i?"rate-limit":`HTTP ${n.status}`)}Lh=await n.json()}s=Dp(Lh)}catch(n){e=`<div class="card-meta" style="color:#f88;margin-bottom:12px">${n.message==="rate-limit"?"GitHub rate limit reached. Showing cached projects.":"Could not load live projects. Showing defaults."}</div>`}const t=s.map(n=>{const i=Pp[n.language]||Pp.default;return`
            <a class="overlay-card github-card" href="${pu(n.html_url)}" target="_blank" rel="noopener noreferrer">
                <div class="card-info">
                    <div class="card-title">${at(n.name)}</div>
                    <div class="card-meta">${n.description?at(n.description.slice(0,80)):""}</div>
                    ${n.language?`
                        <div class="project-lang">
                            <span class="lang-dot" style="background:${i}"></span>
                            ${at(n.language)}
                            <span style="margin-left:auto">⭐ ${n.stargazers_count}</span>
                        </div>`:""}
                </div>
            </a>`}).join("");return{title:"🔧 Projects",html:`
            ${e}
            <div class="overlay-grid">${t}</div>
            <div style="text-align:center;margin-top:16px">
                <a href="https://github.com/joeloffbeat" target="_blank" rel="noopener noreferrer" class="blog-link">
                    View all on GitHub ↗
                </a>
            </div>`}}async function YA(){let s="";try{const e=await fetch("/spotify-data.json");e.ok&&(s=((await e.json()).playlists||[]).map(n=>`
                <a class="overlay-card spotify-playlist-card" href="${pu(n.externalUrl)}" target="_blank" rel="noopener noreferrer">
                    ${n.coverUrl?`<img class="spotify-cover" src="${pu(n.coverUrl)}" alt="${at(n.name)}" loading="lazy">`:'<div class="spotify-cover" style="background:#282828"></div>'}
                    <div class="card-info">
                        <div class="card-title">${at(n.name)}</div>
                    </div>
                </a>`).join(""))}catch{}return{title:"🎵 Music & Playlists",html:`
            <div class="overlay-section">
                <a href="https://open.spotify.com/user/9v9n3x28qu2liz2rbmpukpqcv" target="_blank" rel="noopener noreferrer" class="blog-link">
                    Open Spotify Profile ↗
                </a>
            </div>
            ${s?`<div class="overlay-section"><h3>My Playlists</h3><div class="overlay-grid">${s}</div></div>`:'<div class="overlay-section"><div class="card-meta">Playlist data unavailable — view them on Spotify.</div></div>'}`}}function $A(){function s(r){const a=Math.floor(r||0);return"★".repeat(Math.min(5,Math.max(0,a)))+"☆".repeat(Math.max(0,5-Math.min(5,a)))}function e(r){const a=[r.year,r.genre].filter(Boolean).map(at).join(" &middot; ");return`
            <div class="watched-card">
                <div class="watched-info">
                    <div class="watched-title">${at(r.title)}</div>
                    ${a?`<div class="watched-meta">${a}</div>`:""}
                    <div class="watched-stars">${s(r.rating)}</div>
                    ${r.notes?`<div class="watched-notes">${at(r.notes)}</div>`:""}
                </div>
            </div>`}function t(r){const a=[r.author,r.year,r.genre].filter(Boolean).map(at).join(" &middot; ");return`
            <div class="watched-card">
                <div class="watched-info">
                    <div class="watched-title">${at(r.title)}</div>
                    ${a?`<div class="watched-meta">${a}</div>`:""}
                    <div class="watched-stars">${s(r.rating)}</div>
                    ${r.notes?`<div class="watched-notes">${at(r.notes)}</div>`:""}
                </div>
            </div>`}const n=Ip.length?`<div class="watched-grid">${Ip.map(t).join("")}</div>`:'<div class="overlay-loading">No books yet. Add entries to _watched/books.json.</div>',i=Rp.length?`<div class="watched-grid">${Rp.map(e).join("")}</div>`:'<div class="overlay-loading">No movies yet. Add entries to _watched/movies.json.</div>';return{title:"📚 Books & Movies",html:`
            <div class="tab-bar">
                <button class="tab-btn active" data-tab="books">📚 Books</button>
                <button class="tab-btn" data-tab="movies">🎬 Movies</button>
            </div>
            <div class="tab-panel" data-panel="books">${n}</div>
            <div class="tab-panel tab-panel-hidden" data-panel="movies">${i}</div>`,onReady:r=>{r.addEventListener("click",a=>{const o=a.target.closest(".tab-btn");if(!o)return;const l=o.dataset.tab;r.querySelectorAll(".tab-btn").forEach(c=>c.classList.remove("active")),o.classList.add("active"),r.querySelectorAll(".tab-panel").forEach(c=>c.classList.add("tab-panel-hidden")),r.querySelector(`.tab-panel[data-panel="${CSS.escape(l)}"]`).classList.remove("tab-panel-hidden")})}}}function ZA(){const s="R_kgDOQxPGlQ",e="DIC_kwDOQxPGlc4C5eoV";return{title:"🐦 Contact Info",html:`
            <div class="tab-bar">
                <button class="tab-btn active" data-tab="contact">📬 Contact</button>
                <button class="tab-btn" data-tab="guestbook">📖 Guestbook</button>
            </div>
            <div class="tab-panel" data-panel="contact">
                <div class="contact-card">
                    <div class="contact-name">Joel</div>
                    <div class="contact-links">
                        <a href="mailto:joeloffbeat@gmail.com" class="contact-link">📧 joeloffbeat@gmail.com</a>
                        <a href="https://github.com/joeloffbeat" target="_blank" rel="noopener noreferrer" class="contact-link">🐙 GitHub</a>
                        <a href="https://www.linkedin.com/in/joel-antony-xaviour-97394a140/" target="_blank" rel="noopener noreferrer" class="contact-link">💼 LinkedIn</a>
                        <a href="https://instagram.com/joeloffbeat" target="_blank" rel="noopener noreferrer" class="contact-link">📷 Instagram</a>
                        <a href="https://x.com/joeloffbeat" target="_blank" rel="noopener noreferrer" class="contact-link">𝕏 X</a>
                    </div>
                </div>
            </div>
            <div class="tab-panel tab-panel-hidden" data-panel="guestbook">
                <div class="giscus-container" style="padding:8px 0;min-height:200px"></div>
            </div>`,onReady:t=>{let n=!1;t.addEventListener("click",i=>{const r=i.target.closest(".tab-btn");if(!r)return;const a=r.dataset.tab;if(t.querySelectorAll(".tab-btn").forEach(l=>l.classList.remove("active")),r.classList.add("active"),t.querySelectorAll(".tab-panel").forEach(l=>l.classList.add("tab-panel-hidden")),t.querySelector(`.tab-panel[data-panel="${CSS.escape(a)}"]`).classList.remove("tab-panel-hidden"),a==="guestbook"&&!n){n=!0;const l=document.createElement("script");l.src="https://giscus.app/client.js",l.setAttribute("data-repo","joeloffbeat/joeloffbeat.github.io"),l.setAttribute("data-repo-id",s),l.setAttribute("data-category","Guestbook"),l.setAttribute("data-category-id",e),l.setAttribute("data-mapping","specific"),l.setAttribute("data-term","guestbook"),l.setAttribute("data-reactions-enabled","1"),l.setAttribute("data-emit-metadata","0"),l.setAttribute("data-input-position","top"),l.setAttribute("data-theme","dark"),l.setAttribute("data-lang","en"),l.setAttribute("crossorigin","anonymous"),l.async=!0,t.querySelector(".giscus-container").appendChild(l)}})}}}function JA(){return{title:"❓ ???",html:`
            <div class="contact-card">
                <div class="contact-name" style="font-size:clamp(10px,1.8vw,16px)">Hey.</div>
                <div class="overlay-section" style="text-align:center">
                    <p style="font-size:clamp(7px,1.1vw,10px);line-height:2.2;color:#ccc">
                        You found me.<br><br>
                        Most people never explore this far.<br><br>
                        Joel built this whole world from scratch —<br>
                        every tile, every system, every sprite.<br><br>
                        <span style="color:#ffd700">The real secret?</span><br><br>
                        So can you.<br><br>
                        Go build something.
                    </p>
                </div>
            </div>`}}function KA(){return{title:"🏠 Joel's Mindscape",html:`
            <div class="contact-card">
                <div class="contact-name">JOEL</div>
                <div class="card-meta" style="text-align:center;margin-bottom:20px;color:#4a9eff;font-size:clamp(7px,1.1vw,10px)">
                    Creator &middot; Data Nerd
                </div>
                <div class="overlay-section">
                    <p style="font-size:clamp(7px,1.1vw,10px);line-height:2.2;color:#ccc;text-align:center">
                        Building things at the intersection of data, code, and art.<br><br>
                        coding &middot; data science &middot; illustrations<br>
                        caricatures &middot; video editing &middot; making stuff.
                    </p>
                </div>
                <div class="overlay-section">
                    <h3 style="text-align:center;margin-bottom:14px">EXPLORE THE MINDSCAPE</h3>
                    <div class="contact-links">
                        <a href="#" class="contact-link home-nav-link" data-overlay="blog-overlay">🖥️ Tech Blog</a>
                        <a href="#" class="contact-link home-nav-link" data-overlay="projects-overlay">🔧 Projects</a>
                        <a href="#" class="contact-link home-nav-link" data-overlay="art-overlay">🎨 Art Gallery</a>
                        <a href="#" class="contact-link home-nav-link" data-overlay="music-overlay">🎵 Music &amp; Playlists</a>
                        <a href="#" class="contact-link home-nav-link" data-overlay="books-overlay">📚 Books &amp; Movies</a>
                        <a href="#" class="contact-link home-nav-link" data-overlay="travel-overlay">🚗 Travel Plans</a>
                    </div>
                </div>
            </div>`,onReady:s=>{s.addEventListener("click",e=>{const t=e.target.closest(".home-nav-link");t&&(e.preventDefault(),mT(async()=>{const{open:n}=await Promise.resolve().then(()=>r1);return{open:n}},void 0).then(({open:n})=>{n(t.dataset.overlay).catch(console.error)}))})}}}async function jA(){let s=null;try{const n=await fetch("/now.json");n.ok&&(s=await n.json())}catch{}return s?{title:"📌 What Joel's Up To Now",html:`<div class="now-list">${[{label:"Building",value:s.building,icon:"🔨"},{label:"Reading",value:s.reading,icon:"📖"},{label:"Watching",value:s.watching,icon:"📺"},{label:"Listening to",value:s.listening,icon:"🎧"},{label:"Thinking about",value:s.thinking_about,icon:"💭"}].filter(n=>n.value).map(n=>`
        <div class="now-item">
            <div class="now-icon">${at(n.icon)}</div>
            <div class="now-body">
                <div class="now-label">${at(n.label)}</div>
                <div class="now-value">${at(n.value)}</div>
            </div>
        </div>`).join("")}</div>`}:{title:"📌 Now",html:'<div class="overlay-loading">Board is empty. Update public/now.json.</div>'}}function QA(){const s=["You've been thinking about that project for months. Start today. Seriously.","Draw something. It doesn't have to be good. Just draw it.","The gap between your taste and your output closes only by making more things.","What would you build if you knew it would fail? Build that.","Joel started this website to inspire himself as much as anyone else. What's yours?"],e=s[Math.floor(Math.random()*s.length)];return{title:"🔥 Start Something",html:`
            <div class="contact-card">
                <div class="contact-name" style="font-size:clamp(9px,1.6vw,14px);line-height:2.2;color:#ffd700;text-align:center">
                    ${at(e)}
                </div>
                <div class="contact-links" style="margin-top:28px">
                    <a href="https://github.com/joeloffbeat" target="_blank" rel="noopener noreferrer" class="contact-link">
                        → Checkout my GitHub
                    </a>
                    <a href="https://instagram.com/joeloffbeat" target="_blank" rel="noopener noreferrer" class="contact-link">
                        → Follow the creative journey
                    </a>
                </div>
            </div>`}}function e1(){return{title:"✨ You Found It",html:`
            <div class="contact-card">
                <div class="overlay-section" style="text-align:center">
                    <p style="font-size:clamp(7px,1.1vw,10px);line-height:2.5;color:#ccc">
                        Most people never walk this far.<br><br>
                        Joel built this whole world from scratch —<br>
                        every tile, every sprite, every system.<br><br>
                        <span style="color:#ffd700;font-size:clamp(8px,1.3vw,12px)">
                            The real secret?
                        </span><br><br>
                        So can you.<br><br>
                        Go build something.
                    </p>
                    <div class="contact-links" style="margin-top:24px">
                        <a href="https://github.com/joeloffbeat" target="_blank" rel="noopener noreferrer" class="contact-link">
                            → Start on GitHub
                        </a>
                    </div>
                </div>
            </div>`}}function t1(){return{title:"📸 Peter Parker",html:`
            <div class="contact-card">
                <div class="contact-name" style="font-size:clamp(10px,1.8vw,16px)">Hey! I'm Peter.</div>
                <div class="card-meta" style="text-align:center;margin-bottom:20px;color:#e0342a;font-size:clamp(7px,1.1vw,10px)">
                    Photographer &middot; Daily Bugle &middot; Totally Normal Guy
                </div>
                <div class="overlay-section">
                    <p style="font-size:clamp(7px,1.1vw,10px);line-height:2.2;color:#ccc;text-align:center">
                        Just a freelance photographer passing through.<br>
                        I shoot photos of, uh... mostly Spider-Man, actually.<br><br>
                        <span style="color:#e0342a;font-size:clamp(8px,1.3vw,11px)">
                            Wait — you didn't hear that from me.
                        </span><br><br>
                        Anyway. Cool world you've got here. Very... web-like. Architecturally.<br>
                        I mean — structurally. I don't know anything about webs.
                    </p>
                    <p style="font-size:clamp(8px,1.3vw,11px);line-height:2;color:#ffd700;text-align:center;margin-top:20px">
                        "With great power comes great responsibility."
                    </p>
                    <p style="font-size:clamp(6px,0.95vw,9px);line-height:2;color:#666;text-align:center;margin-top:8px">
                        — My uncle said that. Great guy. Miss him.
                    </p>
                </div>
            </div>`}}function n1(){return{title:"⚔️ Luke Skywalker",html:`
            <div class="contact-card">
                <div class="contact-name" style="font-size:clamp(10px,1.8vw,16px)">I am a Jedi.</div>
                <div class="card-meta" style="text-align:center;margin-bottom:20px;color:#4a9eff;font-size:clamp(7px,1.1vw,10px)">
                    Jedi Knight &middot; Son of Skywalker &middot; Last Hope of the Galaxy
                </div>
                <div class="overlay-section">
                    <p style="font-size:clamp(7px,1.1vw,10px);line-height:2.4;color:#ccc;text-align:center">
                        I once thought I had to face everything alone.<br>
                        I was wrong.<br><br>
                        <span style="color:#4a9eff;font-size:clamp(8px,1.3vw,11px)">
                            You built this world yourself.
                        </span><br><br>
                        I sense a strong will in you — the will to create,<br>
                        to connect, to leave something behind.<br><br>
                        That is the Force working through you.
                    </p>
                    <p style="font-size:clamp(8px,1.3vw,11px);line-height:2;color:#ffd700;text-align:center;margin-top:20px">
                        "The Force will be with you. Always."
                    </p>
                    <p style="font-size:clamp(6px,0.95vw,9px);line-height:2;color:#666;text-align:center;margin-top:8px">
                        — Now go. There is much to build.
                    </p>
                </div>
            </div>`}}const i1={"art-overlay":zA,"blog-overlay":VA,"travel-overlay":HA,"projects-overlay":qA,"music-overlay":YA,"books-overlay":$A,"contact-overlay":ZA,"secret-npc-overlay":JA,"secret-portal-overlay":e1,"home-overlay":KA,"now-overlay":jA,"start-overlay":QA,"peter-parker-overlay":t1,"luke-skywalker-overlay":n1};async function s1(s){const e=i1[s];return e?e():null}let gi=null,mu=null,qn=null,Np=null,Up=null,gs=!1,Fp=0;function e0(){gi=document.getElementById("overlay-container"),mu=gi.querySelector(".overlay-title"),qn=gi.querySelector(".overlay-body"),Np=gi.querySelector(".overlay-close"),Up=gi.querySelector(".overlay-backdrop"),Np.addEventListener("click",Jo),Up.addEventListener("click",Jo),window.addEventListener("keydown",s=>{s.key==="Escape"&&gs&&Jo()})}async function Zo(s){const e=++Fp;mu.textContent="";const t=qn.cloneNode(!1);qn.parentNode.replaceChild(t,qn),qn=t,qn.innerHTML='<div class="overlay-loading">Loading...</div>',gi.classList.remove("overlay-hidden"),gi.classList.add("overlay-visible"),gs=!0;try{const n=await s1(s);if(e!==Fp)return;if(!n){qn.innerHTML='<div class="overlay-loading">Content not found.</div>';return}mu.textContent=n.title,qn.innerHTML=n.html,n.onReady&&n.onReady(qn)}catch(n){console.error("Overlay error:",n),qn.innerHTML='<div class="overlay-loading">Failed to load content.</div>'}}function Jo(){gi.classList.remove("overlay-visible"),gi.classList.add("overlay-hidden"),gs=!1}const r1=Object.freeze(Object.defineProperty({__proto__:null,close:Jo,initOverlay:e0,get isOpen(){return gs},open:Zo},Symbol.toStringTag,{value:"Module"})),a1={bgm:"/assets/audio/bgm.mp3",step_G:"/assets/audio/step_grass.mp3",step_B:"/assets/audio/step_brick.mp3",step_R:"/assets/audio/step_rock.mp3",ui_open:"/assets/audio/ui_open.mp3",ui_close:"/assets/audio/ui_close.mp3",ui_blip:"/assets/audio/ui_blip.mp3",water:"/assets/audio/water_loop.mp3"};let St=null,dr={},hr=null,Op=-1/0,Sd=!1;const o1=.38;function gu(){const s=document.getElementById("audio-toggle");s&&(s.textContent=St?.state==="running"?"🔊":"🔇")}async function l1(s){const e=await fetch(s);if(!e.ok)return console.warn(`Audio: could not load ${s} (${e.status})`),null;const t=await e.arrayBuffer();return St.decodeAudioData(t)}function t0(s,e=.6){if(!St||!dr[s]||St.state!=="running")return;const t=St.createBufferSource();t.buffer=dr[s];const n=St.createGain();n.gain.value=e,t.connect(n),n.connect(St.destination),t.start()}async function c1(){St=new(window.AudioContext||window.webkitAudioContext),await Promise.allSettled(Object.entries(a1).map(async([i,r])=>{const a=await l1(r);a&&(dr[i]=a)}));const s=St.createBufferSource();s.buffer=dr.bgm,s.loop=!0;const e=St.createGain();e.gain.value=.35,s.connect(e),e.connect(St.destination),s.start();const t=St.createBufferSource();t.buffer=dr.water,t.loop=!0,hr=St.createGain(),hr.gain.value=0,t.connect(hr),hr.connect(St.destination),t.start();function n(){Sd&&St&&St.state==="suspended"&&St.resume().then(gu)}document.addEventListener("click",n),document.addEventListener("keydown",n),document.addEventListener("touchstart",n,{passive:!0}),St.addEventListener("statechange",gu),localStorage.getItem("audioEnabled")==="true"?n0(!0):St.suspend()}function n0(s){St&&(Sd=s,localStorage.setItem("audioEnabled",s?"true":"false"),s?St.resume():St.suspend(),gu())}function h1(){return Sd}function u1(s,e){if(e-Op<o1)return;Op=e;const t=`step_${s}`;dr[t]&&t0(t,.6)}function Dh(s){t0(`ui_${s}`,.7)}function d1(s){if(!hr||!St)return;const e=Math.max(0,.7*(1-s/18));hr.gain.setTargetAtTime(e,St.currentTime,.5)}let Md=!1,_u=!1,xu=0;const f1=2.5,kp=1.8;let as=null,i0=null,ds=null;function p1(s,e){if(as=s,i0=e,sessionStorage.getItem("intro-done"))return;Md=!0,ds=document.getElementById("intro-screen"),ds&&(ds.style.display="flex");const t=n=>{["Shift","Control","Alt","Meta"].includes(n?.key)||(window.removeEventListener("keydown",t),window.removeEventListener("pointerdown",t),m1())};window.addEventListener("keydown",t),window.addEventListener("pointerdown",t)}function m1(){Md=!1,_u=!0,xu=0,ds&&(ds.style.opacity="0",setTimeout(()=>{ds&&(ds.style.display="none")},700)),sessionStorage.setItem("intro-done","1"),i0?.()}function g1(s){if(!_u||!as)return;xu+=s;const e=Math.min(xu/f1,1),t=1-Math.pow(1-e,3),n=kp-(kp-1)*t,i=mi.VIEW_SIZE*n,r=window.innerWidth/window.innerHeight;as.left=-i*r,as.right=i*r,as.top=i,as.bottom=-i,as.updateProjectionMatrix(),e>=1&&(_u=!1)}function _1(){return Md}const Ii=[{h:0,sky:526368,amb:.15,dirI:.1,dirC:3364266,phase:"night"},{h:5,sky:526368,amb:.15,dirI:.1,dirC:3364266,phase:"night"},{h:6,sky:16740400,amb:.42,dirI:.5,dirC:16750933,phase:"dawn"},{h:7,sky:8900331,amb:.8,dirI:1,dirC:16777215,phase:"day"},{h:17,sky:8900331,amb:.8,dirI:1,dirC:16777215,phase:"day"},{h:19,sky:16729344,amb:.48,dirI:.55,dirC:16737843,phase:"dusk"},{h:20,sky:1710654,amb:.28,dirI:.25,dirC:4482764,phase:"evening"},{h:23,sky:526368,amb:.15,dirI:.1,dirC:3364266,phase:"night"},{h:24,sky:526368,amb:.15,dirI:.1,dirC:3364266,phase:"night"}];let tr="day",Bp=-1,Gp=null;function oa(s,e,t){return s+(e-s)*t}function zp(s,e,t){const n=s>>16&255,i=s>>8&255,r=s&255,a=e>>16&255,o=e>>8&255,l=e&255;return Math.round(oa(n,a,t))<<16|Math.round(oa(i,o,t))<<8|Math.round(oa(r,l,t))}function x1(){const s=new Date,e=s.getHours()+s.getMinutes()/60;let t=Ii[0],n=Ii[Ii.length-1];for(let r=0;r<Ii.length-1;r++)if(e>=Ii[r].h&&e<Ii[r+1].h){t=Ii[r],n=Ii[r+1];break}const i=(e-t.h)/Math.max(n.h-t.h,1e-4);return{sky:zp(t.sky,n.sky,i),amb:oa(t.amb,n.amb,i),dirI:oa(t.dirI,n.dirI,i),dirC:zp(t.dirC,n.dirC,i),phase:i<.5?t.phase:n.phase}}function y1(s,e,t,n){const i=Date.now();i-Bp>1e4&&(Gp=x1(),Bp=i);const r=Gp;if(tr=r.phase,r.amb,s.setClearColor(r.sky),e.intensity=r.amb,t.intensity=r.dirI,t.color.setHex(r.dirC),n){const a=tr==="night"||tr==="evening"?1:tr==="dawn"||tr==="dusk"?.4:0;n.material.opacity+=(a-n.material.opacity)*.005}}function v1(){return tr}const yu=800;let la=null,Un=null,er=!1,Nh=0,Uh=0,Vp=0,Go=0;const b1=300,S1=.2,Hp=120,M1=300;function w1(s){Un=new Float32Array(yu*3);for(let n=0;n<yu;n++)Un[n*3]=(Math.random()-.5)*140,Un[n*3+1]=Math.random()*80,Un[n*3+2]=(Math.random()-.5)*140;const e=new He;e.setAttribute("position",new tt(Un,3));const t=new Ia({color:11193599,size:.4,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0});la=new mc(e,t),s.add(la)}function E1(s){if(!la)return;Nh+=s,Nh>=b1&&(Nh=0,!er&&Math.random()<S1&&(er=!0,Uh=0,Vp=Hp+Math.random()*(M1-Hp))),er&&(Uh+=s,Uh>=Vp&&(er=!1));const e=er?.55:0,t=er?.4:.25;if(Go+=(e-Go)*t*s,la.material.opacity=Math.max(0,Math.min(.6,Go)),Go>.01){for(let n=0;n<yu;n++)Un[n*3]-=5*s,Un[n*3+1]-=38*s,Un[n*3+1]<-5&&(Un[n*3]=(Math.random()-.5)*140,Un[n*3+1]=65+Math.random()*20,Un[n*3+2]=(Math.random()-.5)*140);la.geometry.attributes.position.needsUpdate=!0}}const T1=It.SPEED*.45,Ko={};async function A1(s){if(Ko[s])return Ko[s];const e=await new Promise((t,n)=>new Ba().load(s,t,void 0,n));return e.magFilter=et,e.minFilter=et,Ko[s]=e,e}function C1(s,e){if(s===0&&e===0)return 0;const t=(Math.atan2(e,s)*180/Math.PI+360)%360;return(Math.round(t/45)%8+2)%8}function Fh(s,e){s.currentAnimation!==e&&(s.currentAnimation=e,s.frame=s.def.animations[e].frameIndices[0],s.frameItr=0)}function R1(s){const{sheetCols:e,sheetRows:t,animations:n}=s.def,i=1/e,r=1/t,a=n[s.currentAnimation];s.frameItr+=1,s.frameItr>a.duration&&a.frames>1&&(s.frameItr=0,s.frame=a.frameIndices[(s.frame+1)%a.frames]);const o=s.mesh.material.map;o.offset.set(s.directionIndex*i,s.frame*r),o.needsUpdate=!0}function s0(s){return s.map(([e,t])=>wn(e,t))}const I1=s0([[12,20],[18,20],[19,25],[14,25]]),P1=s0([[6,7],[6,2],[9,4],[10,2]]),Wp=[{id:"peter-parker",label:"Peter Parker",description:"Just a friendly photographer",icon:"📸",overlayId:"peter-parker-overlay",triggerRadius:6,waypoints:I1,spritePath:"/assets/npc.png",sheetCols:8,sheetRows:3,animations:{idle:{frames:1,duration:8,frameIndices:[1]},walk:{frames:3,duration:8,frameIndices:[0,1,2]}}},{id:"luke-skywalker",label:"Luke Skywalker",description:"A wandering Jedi",icon:"⚔️",overlayId:"luke-skywalker-overlay",triggerRadius:6,waypoints:P1,spritePath:"/assets/npc.png",sheetCols:8,sheetRows:3,animations:{idle:{frames:1,duration:8,frameIndices:[1]},walk:{frames:3,duration:8,frameIndices:[0,1,2]}}}];async function L1(){const s=[...new Set(Wp.map(e=>e.spritePath))];return await Promise.all(s.map(A1)),Wp.map(e=>{const t=1/e.sheetCols,n=1/e.sheetRows,i=e.animations.idle.frameIndices[0],r=Ko[e.spritePath].clone();r.wrapS=bi,r.wrapT=bi,r.repeat.set(t,n),r.offset.set(0,i*n),r.needsUpdate=!0;const a=new Mr({map:r,transparent:!0,alphaTest:.5}),o=new Ra(a);o.scale.set(It.SCALE.x,It.SCALE.y,It.SCALE.z);const l=e.waypoints[0];return o.position.set(l.x,It.BOBBING.BASE_HEIGHT,l.z),{mesh:o,def:e,overlayId:e.overlayId,triggerRadius:e.triggerRadius,label:e.label,description:e.description,icon:e.icon,getDistanceTo:c=>o.position.distanceTo(c),waypointIdx:0,pausing:!1,pauseTimer:0,currentAnimation:"idle",directionIndex:0,frame:i,frameItr:0}})}function D1(s,e){for(const t of s){if(t.pausing)t.pauseTimer-=e,t.pauseTimer<=0&&(t.pausing=!1,t.waypointIdx=(t.waypointIdx+1)%t.def.waypoints.length),Fh(t,"idle");else{const n=t.def.waypoints[t.waypointIdx],i=n.x-t.mesh.position.x,r=n.z-t.mesh.position.z,a=Math.hypot(i,r);if(a<.4)t.pausing=!0,t.pauseTimer=.6+Math.random()*1.5,Fh(t,"idle");else{const o=T1*e;t.mesh.position.x+=i/a*o,t.mesh.position.z+=r/a*o,t.directionIndex=C1(i,r),Fh(t,"walk")}}R1(t)}}class N1{constructor(){this.scene=null,this.camera=null,this.renderer=null,this.orbitControls=null,this.clock=new ad,this.character=null,this.ground=null,this.entities=[],this.npcs=[],this.decoratives=[],this.colliders=[],this.ambientLight=null,this.directionalLight=null,this.trailGhosts=[],this.trailTimer=0,this.controlsState={keys:{w:!1,a:!1,s:!1,d:!1,ArrowUp:!1,ArrowLeft:!1,ArrowDown:!1,ArrowRight:!1," ":!1},isMoving:!1,targetPosition:new A},this._prevCharPos=new A,this._waterPositions=[],this.starsMesh=null,this._portalTriggered=!1}async init(){this.initScene(),this.initCamera(),this.initRenderer(),this.initOrbitControls(),await this.createWorld(),this.initInputControls(),this.applyLighting(),this.initUI(),window.addEventListener("resize",()=>this.onResize()),this.animate(),p1(this.camera,()=>{})}initScene(){const{scene:e,ambientLight:t,directionalLight:n}=uE();this.scene=e,this.ambientLight=t,this.directionalLight=n}initCamera(){this.camera=dE()}initRenderer(){this.renderer=new Dg({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.shadowMap.enabled=Ch.ENABLE_SHADOWS,this.renderer.shadowMap.type=Yw[Ch.SHADOW_TYPE],this.renderer.toneMapping=Zl,this.renderer.toneMappingExposure=Ch.TONE_MAPPING_EXPOSURE,document.body.appendChild(this.renderer.domElement)}initOrbitControls(){this.orbitControls=new Zw(this.camera,this.renderer.domElement),this.orbitControls.enableRotate=zr.ENABLE_ROTATE,this.orbitControls.enableDamping=zr.ENABLE_DAMPING,this.orbitControls.dampingFactor=zr.DAMPING_FACTOR,this.orbitControls.screenSpacePanning=zr.SCREEN_SPACE_PANNING,this.orbitControls.mouseButtons={LEFT:zr.MOUSE_BUTTONS.LEFT,MIDDLE:yi.DOLLY,RIGHT:yi.PAN},Ga&&(this.orbitControls.touches={ONE:_i.NONE,TWO:_i.DOLLY_PAN})}async createWorld(){this.starsMesh=HE(),this.scene.add(this.starsMesh);const{groundMesh:e,walls:t}=await GE();this.ground=e,this.scene.add(this.ground);for(const n of t)this.scene.add(n);for(const n of yE){const i=new qE(n);await i.create(),this.scene.add(i.mesh),this.colliders.push(i.collider),this.entities.push(i)}this.character=RE(),this.scene.add(this.character),this.controlsState.targetPosition.copy(this.character.position),this.decoratives=await ZE(vE);for(const n of this.decoratives)this.scene.add(n.mesh);for(let n=0;n<ar.length;n++)for(let i=0;i<ar[n].length;i++)if(ar[n][i]==="W"){const r=wn(i,n);this._waterPositions.push({x:r.x,z:r.z})}this._prevCharPos.copy(this.character.position),w1(this.scene),this.npcs=await L1();for(const n of this.npcs)this.scene.add(n.mesh);QE(this.scene)}initInputControls(){ME(this.camera,this.ground,this.controlsState,this.renderer.domElement),tT(this.camera,this.orbitControls,this.character)}initUI(){const e=document.getElementById("entity-toast");e0();const t=[...this.entities,...this.npcs.filter(n=>n.overlayId)];cT(t,e,n=>{Dh("open"),Zo(n).catch(i=>console.error("Overlay error:",i))}),document.addEventListener("click",n=>{n.target.closest(".overlay-close")&&Dh("close")}),iT(this.controlsState,()=>hT(),()=>gs,n=>Zo(n).catch(i=>console.error("Overlay error:",i))),c1().catch(n=>console.warn("[audio] init failed:",n)),document.getElementById("audio-toggle").addEventListener("click",()=>{n0(!h1())})}applyLighting(){this.ambientLight.intensity=Yn.AMBIENT_INTENSITY,this.directionalLight.intensity=Yn.DIRECTIONAL_INTENSITY}onResize(){const e=window.innerWidth/window.innerHeight,t=mi.VIEW_SIZE;this.camera.left=-t*e,this.camera.right=t*e,this.camera.top=t,this.camera.bottom=-t,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}animate(){requestAnimationFrame(()=>this.animate());const e=this.clock.getDelta();g1(e),nT(e),this.orbitControls.update();const t=gs||_1();if(Zt.turbo&&(this.controlsState.keys[" "]=!0),DE(this.character,this.controlsState,this.clock,e,this.colliders,t,this.camera),Zt.fly&&(this.character.position.y=It.BOBBING.BASE_HEIGHT+5),WE(e),y1(this.renderer,this.ambientLight,this.directionalLight,this.starsMesh),zE(e),JE(this.decoratives,this.clock.getElapsedTime()),eT(this.clock.getElapsedTime(),v1(),e),E1(e),D1(this.npcs,e),uT(this.character.position,t),this.character.position.distanceTo(this._prevCharPos)>.25){const{col:o,row:l}=lr(this.character.position.x,this.character.position.z),c=ar[l]?.[o]??"G";u1(c,this.clock.getElapsedTime()),this._prevCharPos.copy(this.character.position)}if(!this._portalTriggered&&!gs){const{col:o,row:l}=lr(this.character.position.x,this.character.position.z);o===27&&l===27&&(this._portalTriggered=!0,Dh("open"),Zo("secret-portal-overlay").catch(c=>console.error(c)))}let i=999;const r=this.character.position.x,a=this.character.position.z;for(const o of this._waterPositions){const l=Math.hypot(r-o.x,a-o.z);l<i&&(i=l)}d1(i),this.renderer.render(this.scene,this.camera)}updateTrail(e){const t=this.controlsState.keys,n=t[" "],i=this.controlsState.isMoving||t.w||t.a||t.s||t.d||t.ArrowUp||t.ArrowLeft||t.ArrowDown||t.ArrowRight;n&&i?(this.trailTimer+=e,this.trailTimer>=Js.SPAWN_INTERVAL&&(this.trailTimer=0,this.spawnGhost())):this.trailTimer=0;for(let r=this.trailGhosts.length-1;r>=0;r--){const a=this.trailGhosts[r];a.userData.life-=e,a.material.opacity=Math.max(0,a.userData.life/Js.LIFETIME*Js.INITIAL_OPACITY),a.userData.life<=0&&(this.scene.remove(a),a.material.map.dispose(),a.material.dispose(),this.trailGhosts.splice(r,1))}}spawnGhost(){const t=this.character.material.map,n=t.image,i=n.naturalWidth||n.width,r=n.naturalHeight||n.height,a=Math.round(i*t.repeat.x),o=Math.round(r*t.repeat.y),l=Math.round(i*t.offset.x),c=r-Math.round(r*(t.offset.y+t.repeat.y)),h=document.createElement("canvas");h.width=a,h.height=o,h.getContext("2d").drawImage(n,l,c,a,o,0,0,a,o);const d=new Pa(h);d.magFilter=et,d.minFilter=et;const f=new Mr({map:d,transparent:!0,opacity:Js.INITIAL_OPACITY,alphaTest:Js.ALPHA_TEST,depthWrite:!1}),p=new Ra(f);p.scale.copy(this.character.scale),p.position.copy(this.character.position),p.userData.life=Js.LIFETIME,this.scene.add(p),this.trailGhosts.push(p)}}const r0=new N1;r0.init().then(()=>{const s=document.getElementById("loading-screen");s&&(s.classList.add("ls-done"),s.addEventListener("transitionend",()=>s.remove(),{once:!0}))}).catch(s=>console.error("Failed to initialize:",s));window.__app=r0;
