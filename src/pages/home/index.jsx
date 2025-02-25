import { Col, Row } from 'antd';

import { PageContent } from '../../components/page-content';
import { PageHeader } from '../../components/page-header';
import { RouteCard } from './components/route-card';

export const Home = () => {
    return (
        <>
            <PageHeader
                title="Inicio"
                caption="Aqui você pode navegar para outras funções do sistema"
            />
            <PageContent>
                <Row gutter={24} justify={'center'} style={{flex: '1'}}>
                    <Col className="gutter-row" span={6}>
                        <RouteCard
                            title="Master List"
                            caption="Ver listagem de documentos"
                            actionText="Ir"
                            route="/list"
                        />
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <RouteCard
                            title="Criar Documento"
                            caption="Inserir novo documento"
                            actionText="Ir"
                            disabled
                        />
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <RouteCard
                            title="Relatórios"
                            caption="Ver relatórios do documento"
                            actionText="Ir"
                            disabled
                        />
                    </Col>
                </Row>
            </PageContent>
        </>
    )
}
