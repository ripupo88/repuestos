import { Navbar } from '../components/navbar/navbar';
import { Sec1 } from '../components/index/sec1';
import { Sec1a } from '../components/index/sec1a';
import { Sec2 } from '../components/index/sec2';
import { Sec3 } from '../components/index/sec3';
import { Sec4 } from '../components/index/sec4';

export default function Home() {
    return (
        <div>
            <Navbar />

            <Sec1 />
            <Sec1a />
            <Sec2 />
            <Sec3 />
            <Sec4 />
        </div>
    );
}
