import { Meta } from '../components/Meta';
import { Main } from '../components/Main';

function AboutPage() {
    return (
        <Main meta={<Meta title="About Us" description="Description on the background" />}>
            <div>About page</div>
        </Main>
    );
}

export default AboutPage;
