var models = require('../models/');
var datoRecolectado = models.datoRecolectado;
const { Op } = require('sequelize');
class DatosController {

    async listarDatos(req, res) {
        try {
            const listar = await datoRecolectado.findAll({
                attributes: ['dato', 'fecha', 'hora', 'external_id', 'id_sensor'],
                order: [['fecha', 'DESC'], ['hora', 'DESC']]
            });
            res.json({ msg: 'OK!', code: 200, info: listar });
        } catch (error) {
            console.error('Error al listar datos de Temperatura por semana:', error);
            res.status(500).json({ msg: 'Error al listar datos de Temperatura por semana', code: 500 });
        }
    }

    async listarTemperaturaSemana(req, res) {
        try {
            const endDate = new Date();
            const startDate = new Date(endDate); 
            startDate.setDate(startDate.getDate() - 7);

            const listar = await datoRecolectado.findAll({
                attributes: ['dato', 'fecha', 'hora', 'external_id'],
                where: {
                    id_sensor: 2,
                    fecha: {
                        [Op.between]: [startDate, endDate] 
                    }
                },
            });
            res.json({ msg: 'OK!', code: 200, info: listar });
        } catch (error) {
            console.error('Error al listar datos de Temperatura por semana:', error);
            res.status(500).json({ msg: 'Error al listar datos de Temperatura por semana', code: 500 });
        }
    }

    async listarTemperaturaDia(req, res) {
        try {
            const id_sensor = 2; // ID del sensor de temperatura
            const fechaActual = new Date(); // Fecha actual
            fechaActual.setDate(fechaActual.getDate() - 1); // Restar un día

            const fecha = fechaActual.toISOString().slice(0, 10); // Formato YYYY-MM-DD

            const listar = await datoRecolectado.findAll({
                attributes: ['dato', 'fecha', 'hora', 'external_id'],
                where: {
                    id_sensor,
                    fecha
                },
            });

            res.json({ msg: 'OK!', code: 200, info: listar });
        } catch (error) {
            console.error('Error al listar datos de Temperatura por día:', error);
            res.status(500).json({ msg: 'Error al listar datos de Temperatura por día', code: 500 });
        }
    }

    async listarHumedadSemana(req, res) {
        try {
            const endDate = new Date();
            const startDate = new Date(endDate); 
            startDate.setDate(startDate.getDate() - 7);

            const listar = await datoRecolectado.findAll({
                attributes: ['dato', 'fecha', 'hora', 'external_id'],
                where: {
                    id_sensor: 1,
                    fecha: {
                        [Op.between]: [startDate, endDate] 
                    }
                },
            });
            res.json({ msg: 'OK!', code: 200, info: listar });
        } catch (error) {
            console.error('Error al listar datos de Temperatura por semana:', error);
            res.status(500).json({ msg: 'Error al listar datos de Temperatura por semana', code: 500 });
        }
    }

    async listarHumedadDia(req, res) {
        try {
            const id_sensor = 1; // ID del sensor de temperatura
            const fechaActual = new Date(); // Fecha actual
            fechaActual.setDate(fechaActual.getDate() - 1); // Restar un día

            const fecha = fechaActual.toISOString().slice(0, 10); // Formato YYYY-MM-DD

            const listar = await datoRecolectado.findAll({
                attributes: ['dato', 'fecha', 'hora', 'external_id'],
                where: {
                    id_sensor,
                    fecha
                },
            });

            res.json({ msg: 'OK!', code: 200, info: listar });
        } catch (error) {
            console.error('Error al listar datos de Temperatura por día:', error);
            res.status(500).json({ msg: 'Error al listar datos de Temperatura por día', code: 500 });
        }
    }
    async listarCo2Semana(req, res) {
        try {
            const endDate = new Date();
            const startDate = new Date(endDate); 
            startDate.setDate(startDate.getDate() - 7);

            const listar = await datoRecolectado.findAll({
                attributes: ['dato', 'fecha', 'hora', 'external_id'],
                where: {
                    id_sensor: 3,
                    fecha: {
                        [Op.between]: [startDate, endDate] 
                    }
                },
            });
            res.json({ msg: 'OK!', code: 200, info: listar });
        } catch (error) {
            console.error('Error al listar datos de Temperatura por semana:', error);
            res.status(500).json({ msg: 'Error al listar datos de Temperatura por semana', code: 500 });
        }
    }

    async listarCo2Dia(req, res) {
        try {
            const id_sensor = 3; // ID del sensor de temperatura
            const fechaActual = new Date(); // Fecha actual
            fechaActual.setDate(fechaActual.getDate() - 1); // Restar un día

            const fecha = fechaActual.toISOString().slice(0, 10); // Formato YYYY-MM-DD

            const listar = await datoRecolectado.findAll({
                attributes: ['dato', 'fecha', 'hora', 'external_id'],
                where: {
                    id_sensor,
                    fecha
                },
            });

            res.json({ msg: 'OK!', code: 200, info: listar });
        } catch (error) {
            console.error('Error al listar datos de Temperatura por día:', error);
            res.status(500).json({ msg: 'Error al listar datos de Temperatura por día', code: 500 });
        }
    }

}
module.exports = DatosController;