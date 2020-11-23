import React, { Component, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';

const Exercise = props => (


    <tr>
        <td>{props.exercise.rejym_raboty}</td>
        <td>{props.exercise.naimenovanie_azs}</td>
        <td>{props.exercise['№']}</td>
        <td>{props.exercise.kontaktnye_dannye}</td>
        <td>{props.exercise.adres}</td>
        <td>{props.exercise.region}</td>
        <td>
            <Link to={"/edit/" + props.exercise._id}>Редактировать</Link> | <a href="#" onClick={() => {props.deleteExercise(props.exercise._id)}}>Удалить</a>
        </td>
    </tr>
)

export default class ExercisesList extends Component {
    constructor(props) {
        super(props);

        //this.handleChange = this.handleChange.bind(this);
        this.deleteExercise = this.deleteExercise.bind(this);


        this.state = {
            exercises: []
        };


    }

    componentDidMount() {
        axios.get('http://practice_3_mongo_db.test/api/stations')
            .then(response => {
                this.setState({exercises: response.data.data})
                console.log(response.data);
            })
            .catch((error)=> {
                console.log(error);
            })
    }





    deleteExercise(id) {
        axios.delete('http://practice_3_mongo_db.test/api/station/'+id+'/delete')
            .then(res=>console.log(res.data));

        this.setState({
            exercises: this.state.exercises.filter(el=> el._id !== id)
        })
    }


    getSearch =e => {
        e.preventDefault();

        let query = document.getElementsByClassName('search-bar')[0].value;
        axios.get('http://practice_3_mongo_db.test/api/stations/search?query='+query)
            .then(response => {
                this.setState({exercises: response.data.data})
                console.log(response.data);
            })
            .catch((error)=> {
                console.log(error);
            })
    }


    ExercisesList() {
        console.log(this.state.exercises);
        return this.state.exercises.map(currentexercise => {
            return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} />;
        })
    }






    render() {


        return (

            <div>

              <form onSubmit={this.getSearch} className="search-form">
                    <input className="search-bar"  type="text" />
                  <button className="search-button" type="submit">Поиск</button>
                </form>

                <h3>АЗСЫ</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Режим</th>
                            <th>Наименование</th>
                            <th>Номер</th>
                            <th>Контакты</th>
                            <th>Адрес</th>
                            <th>Регион</th>
                        </tr>
                    </thead>

                    <tbody>
                        { this.ExercisesList() }
                    </tbody>
                </table>
            </div>
        )
    }

}