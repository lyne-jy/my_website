import React, { useState } from 'react';
import { getProjects } from "../services/fakeProjectsService";
import { motion } from "framer-motion";

const Projects = () => {
    const [projects, ] = useState(() => getProjects());
    return (
        <motion.div
            initial={{ opacity: 0 , y: 100}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 mt-8">
            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
                {projects.map((project) => (
                    <motion.div
                        whileHover={{
                            scale: 1.1,
                            transition: { ease: "easeOut", duration: 0.3 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        key={project.id}
                        className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
                    >
                        <div className="bg-gray-200 group-hover:opacity-75 h-40">
                            <img
                                src={project.imageSrc}
                                className="w-full h-full object-center object-cover sm:w-full sm:h-full"
                            />
                        </div>
                        <div className="flex-1 p-4 space-y-2 flex flex-col">
                            <h3 className="text-sm font-medium text-gray-900">
                                <a href={project.href}>
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    {project.name}
                                </a>
                            </h3>
                            <p className="text-sm text-gray-500">{project.description}</p>
                            <div>
                                {project.tags.map(tag => <span key={tag} className="inline-flex items-center mx-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                    {tag}
                                </span>)}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Projects;