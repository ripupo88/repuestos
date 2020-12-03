import { Navbar } from "../components/navbar/navbar";
import { Sec1 } from "../components/index/sec1";
import { Sec2 } from "../components/index/sec2";
import { Sec3 } from "../components/index/sec3";

export default function Home() {
    return (
        <div>
            <Navbar />

            <Sec1 />
            <Sec2 />
            <Sec3 />
        </div>
    );
}
