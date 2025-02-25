import { Link } from 'react-router';
import { Button } from "antd";

import './index.css';

export const Navbar = () => {
    return (
        <nav color="light" className='navbar'>
            <h1>Qualyteam Challenge</h1>
            <ul>
                <li>
                    <Button type='link' size='large'>
                        <Link to="/">Home</Link>
                    </Button>
                </li>
                <li>
                    <Button type='link' size='large'>
                        <Link to="/list">Master List</Link>
                    </Button>
                </li>
            </ul>
        </nav>
    );
}