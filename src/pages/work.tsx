import { useEffect, useState } from "react";
import Layout from "@/components/layout";
import { getProjects } from "../../sanity/sanity-utils";
import Grid from "@/components/grid";


export default function Work() {
    const [projects, setProjects] = useState<any>([])
    useEffect(() => {
        async function fetchData() {
            try {
                const posts = await getProjects();
                setProjects(posts)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, []);
    return (
        <Layout>
            <div className="work-intro">
                <div className="container">
                    <div className="intro-img">
                        <div className="hometown">
                            <div className="heart"></div>
                            <div id="top">
                                {"Made by".split('').map((letter, index) => (
                                    <span className={"char" + (index + 1)} key={index}>{letter}</span>
                                ))}
                            </div>
                            <div className="city">Daniel</div>
                            <div id="bottom">
                                {" With heart".split('').map((letter, index) => (
                                    <span className={"char" + (index + 1)} key={index}>{letter}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="intro-texts">
                        <p>Succeed online with a website that is fast, easy to use, and built with best practices.</p>
                        <p>My web developer portfolio highlights just some of the website projects I’ve participated. I have worked on many web programming projects over the years, ranging from full website development to small programming jobs.</p>
                        <p>Since web technologies are developing fast,different web projects with different requirements should be handled with verious techniques.</p>
                    </div>
                </div>
            </div>
            <Grid projects={projects} />
        </Layout>
    )
}