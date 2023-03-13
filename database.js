 import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host:process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,   
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE
    // host:'database-2-instance-1.cmrmnvkjyzzf.us-east-2.rds.amazonaws.com',
    // user:'admin',
    // password:'beactive',
    // database:'sys',



 }).promise()

export async function getAllNotes(){
    const [rows] = await pool.query("SELECT * FROM notes")
    return rows
 }


export async function getSingleNote(id){
    const [rows] = await pool.query("SELECT * FROM notes where id = ?",[id])
    return rows
}

export async function createNote(title,content){
    console.log(content,title)
    const result = await pool.query('INSERT INTO notes (title,contents) VALUES (?,?)',[title,content])
    return {result,title,content}
}

