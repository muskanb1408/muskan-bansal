import React from 'react';
import '../App.css';


const Posts = ({ posts, loading}) => 
{
    if(loading) {
        return <h2>Loading...</h2>
    }
 return(
    <div className={"table-responsive"}>
                <table border = "1" className={"table table-hover table-bordered table -striped"}>
                    <thead>
                        <th>Country</th>
                        <th>Total cases</th>
                        <th>New Cases</th>
                        <th>Total Deaths</th>
                        <th>New Deaths</th>
                        <th>Recovered</th>
                        <th>Active Cases</th>
                    </thead>
                    <tbody>
                        { posts.length ?
                        posts.map(post => (
                            <tr>
                        <td>{post.country}</td>
                        <td>{post.cases}</td>
                        <td>{post.todayCases}</td>
                        <td>{post.deaths}</td>
                        <td>{post.todayDeaths}</td>
                        <td>{post.recovered}</td>
                        <td>{post.active}</td>
                            </tr>
                        )):
                        null
                        }
                    </tbody>
                </table>
            </div>
 );




}
export default Posts;