import React from 'react';
import { CameraIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="bg-white overflow-hidden">
            <div className="relative max-w-7xl mx-auto pt-6 px-4 sm:px-6 lg:px-8">
                <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
                <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
                    <div>
                        <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Hello, I'm Andy, a Computer Science student at the University of Calgary.
                        </h3>
                    </div>
                </div>
                <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                    <div className="relative lg:row-start-1 lg:col-start-2">
                        <svg
                            className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                            aria-hidden="true"
                        >
                            <defs>
                                <pattern
                                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
                        </svg>
                        <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                            <figure>
                                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                                    <img
                                        className="rounded-lg shadow-lg object-cover object-center"
                                        src="./IMG_3224.JPG"
                                        alt="Whitney leaning against a railing on a downtown street"
                                        width={1184}
                                        height={1376}
                                    />
                                </div>
                                <figcaption className="mt-3 flex text-sm text-gray-500">
                                    <CameraIcon className="flex-none w-5 h-5 text-gray-400" aria-hidden="true" />
                                    <span className="ml-2">Photograph by John Zhang (Instagram: 8k.raw)</span>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="mt-8 lg:mt-0">
                        <div className="text-base max-w-prose mx-auto lg:max-w-none">
                            <p className="text-lg text-gray-500">
                                Coding is such a <b><i>cool</i></b> thing, so I chose Computer Science as my major and decided to build my career
                                on it.
                            </p>
                        </div>
                        <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                            <p>
                                Like any other Computer Science student, I've learned some programming languages, the idea of OOP, data
                                structures & algorithms, etc. As I went through the coursework, I found it more and more interesting because
                                coding is not only about writing code that works but also about writing code that is efficient,  maintainable
                                and scalable.
                            </p>
                            <p>
                                For interests, I've done several side projects, mainly on web development. I have to say that I actually enjoy
                                writing <b>JavaScript</b> because it's easy to learn and so capable nowadays! I also learned <b>React</b>, one
                                of the best frameworks for building user interfaces, and I almost used it in every project.
                            </p>
                            <p>
                                My current tech stack:
                            </p>
                            <ul>
                                <li>Frontend: React</li>
                                <li>Backend: Node(Express), ASP.NET, PHP</li>
                                <li>Database: SQL(MySQL), MongoDB</li>
                                <li>Language: JavaScript, HTML/CSS, C#, Java, C/C++, Python, Haskell</li>
                            </ul>
                            <p>
                                I'm currently very interested in the .NET framework. After building an API using ASP.NET, I found it very powerful
                                and efficient. So I'm going to dig deeper into the .NET world and make some Windows apps and web APIs with C#.
                            </p>
                            <h3>My Interests</h3>
                            <p>
                                I've always been fascinated by the beauty of nature, so I love road tripping, hiking and photographing. Since
                                coming to Calgary, The Canadian Rockies have been my favourite place to visit. Check out some of my photos <Link
                                to="/photos"
                                className="text-gray-600">here</Link>.
                            </p>
                            <p>
                                I also love video games, especially games by <a
                                className="text-gray-600"
                                href="https://en.wikipedia.org/wiki/Paradox_Interactive"
                                target="_blank"
                                rel="noopener noreferrer">Paradox</a>.
                                Now I'm more into making mods and doing reverse engineering on games.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;