import { pool } from '../db.js'

export const getEmployees = (req, res) => res.send('Getting employees')

export const createEmployee = async (req, res) => {
   const { name, salary } = req.body
   const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary])
   console.log(req.body)
   res.send({
    id: rows.insertId,
    name,
    salary
   })
}

export const updateEmployee = (req, res) => res.send('Updating employees')

export const deleteEmployee = (req, res) => res.send('Deleting employees')