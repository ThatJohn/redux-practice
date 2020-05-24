import React from 'react';
import {connect} from 'react-redux';
import {getData} from '../actions/index';

class Posts extends React.Component {

    componentDidMount(){
        this.props.getData();
    }
    
    render(){
        return (
            <div>
                <h6>Posts:</h6>
                <ul>
                    {this.props.articles.map(el => (
                        <li key={el.id}>{el.title}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        articles: state.remoteArticles.slice(0, 10)
    };
}

export default connect(mapStateToProps, {getData})(Posts);