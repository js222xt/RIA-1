/** @jsx React.DOM */

var React = require('react'),
	Router = require('react-router'),
	Question = require('./show_question'),
	Link = Router.Link,
	_ = require('lodash');
	

var QuestionList = React.createClass({
	getInitialState: function(){
		return {questions:{}};
	},
	componentWillMount: function() {
		var me = this;
		this.ref = new Firebase("https://ria2014.firebaseio.com/");
		this.ref.child('questions').on("value", function(data) {
			me.setState({'questions':data.val()});
		});
    },
	render: function(){
			return (
			<div id="questionbox">
	          <div id="question">
		          <h2>Questions:</h2>
		          
		          <div>
			          {_.map(this.state.questions,function(q){
			          	return <div><Question data={q}/></div>;
			          })}
			      </div>
	          </div>
	        </div>
	        );
   }
});

module.exports = QuestionList;