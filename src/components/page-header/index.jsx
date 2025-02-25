import './index.css';

const PageHeader = ({ title, caption }) => {
    return (
        <div className="page-header">
            <h2 className="page-header__title">
                {title}
            </h2>
            {caption &&
                <p>
                    {caption}
                </p>
            }
        </div>
    )
};

export { PageHeader };
