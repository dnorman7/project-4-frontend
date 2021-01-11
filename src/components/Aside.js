import Form from './Form.js';


function Aside(props) {
    return (
      <aside>
        <h1>Start creating your list below!</h1>
        <Form handleSubmit={props.handleSubmit}/>
      </aside>
      
    );
}

export default Aside;