import { Header, Statistics, CTA, Footer } from "./components";
import { About, Blogs, Courses, Hero, Instructors, PopularCourses } from "./sections";
import "./app.css";

export default function App() {
    return (
        <>
            <Header />
            <Hero />
            <Statistics />
            <About />
            <PopularCourses />
            <Courses />
            <Instructors />
            <Blogs />
            <CTA />
            <Footer />
        </>
    );
}
