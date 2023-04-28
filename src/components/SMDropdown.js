import NavDropdown from "react-bootstrap/NavDropdown";


function SMDropdown(props) {

    const { dropdowns } = props

    return (
        <>
            {
                dropdowns && Array.isArray(dropdowns) && dropdowns.length > 0 ?
                    dropdowns.map((e, i) => (<NavDropdown key={i} title={e.displayName} id="navbarScrollingDropdown">
                        {
                            e.options && Array.isArray(e.options) && e.options.length > 0 ?
                            e.options.map((key, index) => (<NavDropdown.Item key={index} onChange={()=>{}}>{key.name}</NavDropdown.Item>)) : null
                        }
                    </NavDropdown>

                    )
                    ) : null
            }
        </>

    )
}

export default SMDropdown;