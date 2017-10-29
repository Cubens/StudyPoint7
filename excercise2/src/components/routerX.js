
import React, { Component } from 'react';
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom'
import {  } from 'react-router-dom';
import hp1 from '../images/hp1.jpg';
import lotr1 from '../images/lotr1.jpg';
import eb from '../images/eb.png';


export default class RouterX extends Component{
    render(){
        return(
            <BrowserRouter>
            <div>
                <App />    
                
            </div>
            </BrowserRouter>
        );
    }
}

class App extends Component{
    render(){
        return(
            <div>
            <Header/>
            <Main/>
            </div>
        );
    }
}
class Header extends Component{
    render(){
        return(
            <div id="header">
            <nav>
                <ul>
                <li><Link to='/articles'>articles</Link></li>                
                <li><Link to='/images'>Images</Link></li>
                <li><Link to='/about us'>About us</Link></li>
                </ul>
            </nav>
        </div>
        );
    }
}
class Main extends Component{
    render(){
        return(
            <div id="main">
            <Switch>
            <Route path='/articles' component={Article}/>            
            <Route exact path='/images' component={Images}/>
            <Route path='/about us' component={About}/>
            </Switch>
        </div>
        );
    }
}

const articles = [
    {number: '101', title: 'Harry Potter 1', writer: 'J.K. Rowling', img:hp1}
    ,{number: '102', title: 'Ringenes Herre 1', writer: 'Tolkien', img:lotr1}
    ,{number: '103', title: 'Agurketiden', writer: 'Extrabladet', img:eb}
];

const Article = () => (
    <Switch>
    <div>
    <div style={{"width" : "50%"}} id="list" class="flexItem">
    <Route exact path='/articles' component={ArticleList}/>
    </div>
    <div style={{"width" : "50%"}} id="details" class="flexItem">
    <Route path='/articles/:number' component={ArticlesDetails}/> 
    </div>
    </div>
    </Switch>
);
const ArticleList = () => (
    <div style={{"width" : "50%"}} id="list" class="flexItem">
        <h2>Articles: </h2>
        <ul>
            
            <table >
            <thead>
            <tr>
              <th>title</th>
              <th>writer</th> 
              <th>id</th>
            </tr>
            </thead>
            <tbody>
                {articles.map(p => (   
            <tr>
            <td>
                    <li key={p.number}>
                        <Link to={`/articles/${p.number}`}>{p.title}</Link>
                    </li>
                </td>
                <td>{p.writer}</td> 
                <td>{p.number}</td>
                </tr>
                ))                
            }
            </tbody>
            </table>
        </ul>
    </div> 
);

const ArticlesDetails = (props) => {
    const productsFiltered = articles.filter((p)=>p.number === props.match.params.number, 10);
    const article = (productsFiltered.length > 0)?productsFiltered[0]:null;
    if (!article) {
        return <div>Article {props.match.params.number} was not found</div>
    }else {
    return (
        <div class = "flex-container">
        <div style={{"width" : "50%"}} id="list" class="flexItem">
        <h2>Our articles: </h2>
        <ul>
            
            <table >
            <thead>
            <tr>
              <th>title</th>
              <th>writer</th> 
              <th>id</th>
            </tr>
            </thead>
            <tbody>
                {articles.map(p => (   
            <tr>
            <td>
                    <li key={p.number}>
                        <Link to={`/articles/${p.number}`}>{p.title}</Link>
                    </li>
                </td>
                <td>{p.writer}</td> 
                <td>{p.number}</td>
                </tr>
                ))                
            }
            </tbody>
            </table>
        </ul>
    </div> 
        <div>
            <h2>Articles details:</h2>
            <h3>{article.title} (#{article.number})</h3>
            <h3>Writer: {article.writer}</h3>

            <img src={article.img}/>
        </div>
        </div>
    );
    }
}
const About = () => (
    <div>
        <h2>Exciting Articles Cooporation</h2>
        <p>Message us</p>
        <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br/> 
        Your message:
        <br/> 
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </form>
    </div>
);
const Images = () => (
    <div class="flex-container">
    <img src={hp1} />
    <img src={lotr1} />
    <img src={eb} />
    </div>
);

