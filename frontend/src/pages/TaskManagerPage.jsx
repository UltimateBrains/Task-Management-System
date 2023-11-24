import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const TaskManager = () => {
	return (
        <>
        <br /> <br /> <br />
        <Container fluid>
        <Table  striped="columns" responsive>
        <thead>
          <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            {Array.from({ length: 4 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
        </tbody>
      </Table>
      </Container>
      </>
	);
};

export default TaskManager;