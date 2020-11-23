import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';


export default class CreateExercises extends Component {

    constructor(props) {
        super(props);
        
/*
        this.onChangeUsername = this.onChangeUsername.bind(this);
*/
        this.onChangeRegim = this.onChangeRegim.bind(this);
        this.onChangeNaimenovanie = this.onChangeNaimenovanie.bind(this);
        this.onChangeNomer = this.onChangeNomer.bind(this);
        this.onChangeKontakty = this.onChangeKontakty.bind(this);
        this.onChangeAdres = this.onChangeAdres.bind(this);
        this.onChangeRegion = this.onChangeRegion.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            regim: '',
            naimenovanie: '',
            nomer: '',
            kontakty: '',
            adres: '',
            region: ''
        }
    }

    /*componentDidMount() {
        axios.get('http://localhost:5000/users')
            .then(response => {
                if(response.data.length > 0) {
                    this.setState({
                        users: response.data.map(user=> user.username),
                        username: response.data[0].username
                    })
                }
            })
    }*/

    /*onChangeUsername(e) {
     this.setState({
         username: e.target.value
     });
    }
*/
    onChangeRegim(e) {
        this.setState({
            regim: e.target.value
        });
       }

    onChangeNaimenovanie(e) {
        this.setState({
            naimenovanie: e.target.value
        });
    }

    onChangeNomer(e) {
        this.setState({
            nomer: e.target.value
        });
    }

    onChangeKontakty(e) {
        this.setState({
            kontakty: e.target.value
        });
    }

    onChangeAdres(e) {
        this.setState({
            adres: e.target.value
        });
    }

    onChangeRegion(e) {
        this.setState({
            region: e.target.value
        });
    }



    onSubmit(e) {
        e.preventDefault();

        const exercise = {
          /*  username: this.state.username,*/
            rejym_raboty: this.state.regim,
            naimenovanie_azs: this.state.naimenovanie,
            "№": this.state.nomer,
            kontaktnye_dannye: this.state.kontakty,
            adres: this.state.adres,
            region: this.state.region
        }

        axios.post('http://practice_3_mongo_db.test/api/station/create', exercise)
            .then(res => console.log(res.data))
            .then(r => this.props.history.replace({ pathname: '/'}));

        console.log(exercise);

        //window.location = '/';
    }

    render() {
        return (
            <div>
                <h3> Добавить новую АЗС </h3>
                <form onSubmit={this.onSubmit}>

                    <div className='form-group'>
                        <label>Режим работы </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.regim}
                            onChange={this.onChangeRegim}
                            />
                    </div>
                    <div className='form-group'>
                        <label>Наименование АЗС </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.naimenovanie}
                            onChange={this.onChangeNaimenovanie}
                            />
                    </div>
                    <div className='form-group'>
                        <label>№ </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.nomer}
                        onChange={this.onChangeNomer}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Контактные данные </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.kontakty}
                        onChange={this.onChangeKontakty}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Адрес </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.adres}
                        onChange={this.onChangeAdres}
                        />
                    </div>

                    <div className='form-group'>
                        <label>Регион </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.region}
                        onChange={this.onChangeRegion}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Sozdat' AZS" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }

}