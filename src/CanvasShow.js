export default class CanvasShow {
	constructor(canvas) {
		this.canvas = canvas;
		this.ctx = canvas.getContext('2d');
		this.spherePoints = this.generateSpherePoints(500);
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
	generateSpherePoints(P) {
		//Fibonanci Lattice 
		const points = []
		const gr = Math.PI * (Math.sqrt(5) - 1)
		for (let i = 0; i < P; i++) {
			const k = i + 0.5
			const long = Math.acos(1 - 2 * k / P)
			const lat = k * gr
			const x = Math.cos(lat) * Math.sin(long)
			const y = Math.sin(lat) * Math.sin(long)
			const z = Math.cos(long)
			points.push([x, y, z])
		}

		return points
	}
	start() {
		this.render();
	}
	render() {
		this.ctx.reset();
		const [halfWidth, halfHeight] = [this.curio_width / 2, this.curio_height / 2];
		this.ctx.fillStyle = "rgba(0, 0, 0, 1)";
		const [middleX, middleY] = [this.curio_x + halfWidth, this.curio_y + halfHeight]
		for (const point of this.spherePoints) {
			const [x, y, z] = point;
			this.ctx.beginPath();
			if (x > 0) {
				const radius = 1.5 + x * 0.5
				// const radius = 2;
				drawDot((y * halfWidth) + middleX, (z * halfWidth) + middleY, radius, this.ctx);
			}
			this.ctx.fill();
		}
		requestAnimationFrame(() => this.render());
	}
}

function drawDot(x, y, radius, ctx) {
	const rh = radius / 2;
	ctx.ellipse(x + rh, y + rh, radius, radius, 0, 0, Math.PI * 2)
}