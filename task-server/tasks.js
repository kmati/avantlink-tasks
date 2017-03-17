"use strict";
const baseUri = `/v1/`;

class Tasks {
	constructor(app) {
		this.tasks = [
			{
				task_id: 0, task_name: 'Eat breakfast with the Queen'
			}
		];

		app.get(`${baseUri}tasks`, (req, res, next) => this.getAll(req, res, next));
		app.get(`${baseUri}tasks/:id`, (req, res, next) => this.getOne(req, res, next));
		app.post(`${baseUri}tasks`, (req, res, next) => this.post(req, res, next));
		app.put(`${baseUri}tasks/:id`, (req, res, next) => this.put(req, res, next));
		app.delete(`${baseUri}tasks`, (req, res, next) => this.deleteAll(req, res, next));
		app.delete(`${baseUri}tasks/:id`, (req, res, next) => this.deleteOne(req, res, next));
	}

	getAll(req, res, next) {
		res.status(200).json(this.tasks);
		next();
	}

	getOne(req, res, next) {
		const ret = this.tasks.find(t => t.task_id === Number(req.params.id));
		if (!ret) {
			res.status(404).json({ error: 'Not found' });
		} else {
			res.status(200).json(ret);
		}
		next();
	}

	post(req, res, next) {
		const newId = this.tasks.length + 1;
		this.tasks.push({
			task_id: newId,
			task_name: req.body.name
		});
		res.status(201).json(this.tasks[this.tasks.length - 1]);
		next();
	}

	put(req, res, next) {
		const index = this.tasks.findIndex(t => t.task_id === Number(req.params.id));
		if (index === -1) {
			res.status(404).json({ error: 'Not found' });
		} else {
			this.tasks[index] = req.body;
			res.status(200).json(this.tasks[index]);
		}
		next();
	}

	deleteAll(req, res, next) {
		this.tasks = [];
		res.status(200).json(null);
		next();
	}

	deleteOne(req, res, next) {
		this.tasks = this.tasks.filter(t => t.task_id !== Number(req.params.id));
		res.status(200).json(null);
		next();
	}
}
module.exports = app => new Tasks(app);
