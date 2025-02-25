import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import { PageContent } from '../../components/page-content';
import { PageHeader } from '../../components/page-header';
import api from '../../api';

export const DocumentDetails = () => {
    const [document, setDocument] = useState({});
    const { id } = useParams()

    useEffect(() => {
        api.get(`/documents/${id}`)
            .then(response => setDocument(response.data))
            .catch(error => console.log(error));
    }, [id]);

    return (
        <div>
            <PageHeader
                title="Document Details"
            />
            <PageContent>
                <div>
                    {document?.code}
                </div>
                <div>
                    {document?.title}
                </div>
                <div>
                    {document['release-date']}
                </div>
                <div>
                    {document?.published}
                </div>
                <div>
                    {document?.active}
                </div>
                <div>
                    {document?.processes}
                </div>
            </PageContent>
        </div>
    );
}