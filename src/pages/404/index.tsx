import styles from './PageNotFound.module.scss';

function PageNotFound() {
    return (
        <>
            <style global jsx>{`
                html,
                body {
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                }
            `}</style>
            <div className={styles.not_found} >Error 404: Page not found</div>
        </>
    );
}

export default PageNotFound;
