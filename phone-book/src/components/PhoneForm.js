import React, {Component,Fragment} from 'react';

class PhoneForm extends Component{
    state = {
        name : ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault(); // 페이지 리로딩 방지.
        this.props.onCreate(this.state); // 상태값 부모에게 전달.
        this.setState({
            name : '',
            phone : ''
        })
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder ="이름" name ="name" value={this.state.name} onChange={this.handleChange}/>
                <div>{this.state.name}</div>
                <input placeholder ="휴대폰 번호" name="phone" value={this.state.phone} onChange={this.handleChange}/>
                <div>{this.state.phone}</div>
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;