import React from 'react';
import {connnect, connect} from 'react-redux';
const TodoContainer = () => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todo: state.todo
  };
};

export default connect(mapStateToProps)(TodoContainer);
