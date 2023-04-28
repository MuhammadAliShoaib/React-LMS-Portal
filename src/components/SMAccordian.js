import Accordion from 'react-bootstrap/Accordion';


function SMAccordian(props) {

    const { data, setData } = props


    return (
        <Accordion >
            {
                data && Array.isArray(data) && data.length > 0 ?
                    data.map((e, i) => {
                        return (
                            <Accordion.Item key={i} eventKey={i}>
                                <Accordion.Header>{e.text}</Accordion.Header>
                                <Accordion.Body>{e.insideText}</Accordion.Body>
                            </Accordion.Item>
                )
                    }):null
        }
        </Accordion>
    );
}

export default SMAccordian;