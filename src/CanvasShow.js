
const cos = Math.cos;
const sin = Math.sin;

export default class CanvasShow {
	constructor(canvas) {
		this.canvas = canvas;
		this.ctx = canvas.getContext('2d');
		this.spherePoints = this.generateSpherePoints(700);
		this.pointLocations = new Array(700);
		this.setMousePosition(-1000, -1000);
	}
	setCurioPosition(x, y) {
		this.curio_x = x;
		this.curio_y = y;
	}
	setCurioSize(width, height) {
		this.curio_width = width;
		this.curio_height = height;
	}
	setWindowSize(width, height) {
		this.canvas.width = width;
		this.canvas.height = height;
	}
	setMousePosition(x, y) {
		this.mouse_x = x;
		this.mouse_y = y;
	}
	generateSpherePoints(P) {
		//Fibonanci Lattice 
		const points = new Array(P);
		const gr = Math.PI * (Math.sqrt(5) - 1)
		for (let i = 0; i < P; i++) {
			const k = i + 0.5
			const lat = k * gr
			const long = (Math.acos(1 - 2 * k / P))
			const x = Math.cos(lat) * Math.sin(long)
			const y = Math.sin(lat) * Math.sin(long)
			const z = Math.cos(long)
			points[i] = [x, y, z]
		}

		return points
	}
	start() {
		this.lastTime = performance.now();
		this.angularVelocity = {
			x: 0.2,
			y: 0.25,
			z: 0.03
		}
		this.rotation = {
			x: 0,
			y: 0,
			z: 0
		}
		this.firstTime = true;
		this.render();
	}
	render() {
		const time = performance.now();
		const deltaT = (time - this.lastTime) / 1000;
		this.lastTime = time;

		this.rotation.x += this.angularVelocity.x * deltaT;
		this.rotation.y += this.angularVelocity.y * deltaT;
		this.rotation.z += this.angularVelocity.z * deltaT;
		this.rotation.x %= Math.PI * 2;
		this.rotation.y %= Math.PI * 2;
		this.rotation.z %= Math.PI * 2;
		const yaw = this.rotation.y;
		const pitch = this.rotation.x;
		const roll = this.rotation.z;


		this.ctx.reset();
		const [halfWidth, halfHeight] = [this.curio_width / 2, this.curio_height / 2];
		const [middleX, middleY] = [this.curio_x + halfWidth, this.curio_y + halfHeight]
		let i = 0;
		for (const point of this.spherePoints) {

			let [x, y, z] = point;
			[x, y, z] = rotatePoint([x, y, z], [yaw, pitch, roll]);

			const radius = 1.2;
			this.ctx.fillStyle = `rgba(0, 0, 0, ${z > 0 ? 1 : 0.5})`;

			x = x * halfWidth + middleX;
			y = y * halfWidth + middleY;
			const distToMouse = Math.sqrt(Math.pow(this.mouse_x - x, 2) + Math.pow(this.mouse_y - y, 2));
			x -= (this.mouse_x - x) * Math.pow(0.5, distToMouse / 30);
			y -= (this.mouse_y - y) * Math.pow(0.5, distToMouse / 30);

			if (this.firstTime) {
				this.pointLocations[i] = [x, y, 0, 0];
			} else {
				let [oldX, oldY, vx, vy] = this.pointLocations[i];
				const speed = 0.05;
				const dx = x - oldX;
				const dy = y - oldY;
				vx = vx * 0.9 + dx * speed;
				vy = vy * 0.9 + dy * speed;
				x = oldX + vx;
				y = oldY + vy;
				this.pointLocations[i] = [x, y, vx, vy];
			}

			this.ctx.beginPath();
			// if (x > 0) {
			// const radius = 3 * Math.min(Math.abs(x), 0.5)
			drawDot(x, y, radius, this.ctx);
			// }
			this.ctx.fill();
			i++;
		}
		this.firstTime = false;
		requestAnimationFrame(() => this.render());
	}
}

function rotatePoint(point, rotation) {
	const [yaw, pitch, roll] = rotation;
	const rotationMatrix = [
		[cos(yaw) * cos(pitch), cos(yaw) * sin(pitch) * sin(roll) - sin(yaw) * cos(roll), cos(yaw) * sin(pitch) * cos(roll) + sin(yaw) * sin(roll)],
		[sin(yaw) * cos(pitch), sin(yaw) * sin(pitch) * sin(roll) + cos(yaw) * cos(roll), sin(yaw) * sin(pitch) * cos(roll) - cos(yaw) * sin(roll)],
		[-sin(pitch), cos(pitch) * sin(roll), cos(pitch) * cos(roll)]
	]
	const [px, py, pz] = point;
	const x = rotationMatrix[0][0] * px + rotationMatrix[0][1] * py + rotationMatrix[0][2] * pz;
	const y = rotationMatrix[1][0] * px + rotationMatrix[1][1] * py + rotationMatrix[1][2] * pz;
	const z = rotationMatrix[2][0] * px + rotationMatrix[2][1] * py + rotationMatrix[2][2] * pz;
	return [x, y, z];
}

function drawDot(x, y, radius, ctx) {
	const rh = radius / 2;
	ctx.ellipse(x + rh, y + rh, radius, radius, 0, 0, Math.PI * 2)
}