import { useNavigate } from 'react-router';

import { Card, Button } from "antd";

const RouteCard = ({ title, caption, actionText, route, disabled }) => {
    const navigate = useNavigate();
    
    return (
        <Card title={<h2>{title}</h2>} style={{fontSize: '1rem'}}>
            <p style={{marginTop: '0'}}>
                {caption}
            </p>
            <Button disabled={disabled} onClick={() => navigate(route)} block type='primary' size='large'>
                {actionText}
            </Button>
        </Card>
    )
};

export { RouteCard };
