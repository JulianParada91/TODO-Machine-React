import React from 'react';
import './TodoLoading.css';

function TodoLoanding () {
  return (
   <div className="LoadingTodo-container">
    <span className="LoadingTodo-completeIcon"></span>
    <p className="LoadingTodo-text"></p>
    <span className="LoadingTodo-deleteIcon"></span>
   </div>
  );
}

export { TodoLoanding };