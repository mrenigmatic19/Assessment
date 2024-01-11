//----------------------------------Libraries------------------------------------------------

import express, { Request, Response } from "express";

import * as path from "path";
import * as bcrypt from "bcrypt";
import flash from 'express-flash'; 
import session from "express-session";
import ejs from "ejs";
import  db from './db.config';

//---------------------------------Hosting Port-----------------------------------------------

const port = process.env.PORT || 3001

db()

declare module 'express-session' {
    interface SessionData {
      loginhid?: number;
      loginuid?: number;
      detail:any[];
      value:number;
      isAuth?:boolean;
    } 
  }
//--------------------------------Import---------------------------------------------

import appointmentsRouter from './router/appointmentsRouter'
import bedsRouter from './router/bedsRouter'
import icubedsRouter from './router/icubedsRouter'
import developerRouter from './router/developerRouter'
import homeRouter from './router/homeRouter'
import equipmentsRouter from './router/equipmentsRouter'
import loginhospitalRouter from './router/loginhospitalRouter'
import signuphospitalRouter from './router/signuphospitalRouter'
import signupuserRouter from './router/signupuserRouter'
import loginuserRouter from './router/loginuserRouter'
import mainRouter from './router/mainRouter'
import searchRouter from './router/searchRouter'
import surgeriesRouter from './router/surgeriesRouter'
import hospitaldetailRouter from './router/hospitaldetailRouter'
import logoutRouter from'./router/logout'

 
//---------------------------------Middleware--------------------------------------------------

const app=express()
app.use(express.json())
app.use(flash())
app.use(express.urlencoded({extended:false}))
app.use(express.static("../public"))
app.use(session({
    secret:"MedAppoint",
    resave:false,
    saveUninitialized:false
}))




//----------------------------------Routes---------------------------------------------------


app.use('/home',homeRouter);
app.use('/',mainRouter);
app.use('/login_hospital', loginhospitalRouter);
app.use('/login_user', loginuserRouter);
app.use('/signup_hospital', signuphospitalRouter);
app.use('/signup_user', signupuserRouter);
app.use('/appointments', appointmentsRouter);
app.use('/icubeds', icubedsRouter);
app.use('/equipments', equipmentsRouter);
app.use('/surgeries', surgeriesRouter);
app.use('/beds', bedsRouter);
app.use('/searching', searchRouter);
app.use('/developers', developerRouter);
app.use('/hospitaldetails', hospitaldetailRouter);
app.use('/logout',logoutRouter);

//------------------------------------Engine Setting------------------------------------------

const templatepath=path.join(__dirname,'../public')
app.set("view engine","ejs")
app.set("views",templatepath)


//---------------------------------Hosting---------------------------------------------------


app.listen(port,()=>{
    console.log("Server is Running!")
    })
    


