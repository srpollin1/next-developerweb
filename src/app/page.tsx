"use client";

import React from "react";
import './BentoGrid.css';
import './Buttons.css'
import { FaCheckCircle } from "react-icons/fa";

export default function Home() {
    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <br />
                <h1 className="animated-heading font-black">Diseño y Desarrrollo de<br />
                    <span className="span-texto">Páginas web</span> <br />
                    Autoadministrables
                </h1>
                <div>
                    <br />
                    <button className="button button--rounded">Contáctame</button>
                    <br /><br />
                    <h1 className="text-2xl  line-clamp-3">
                        Te ayudo a digitalizar y automatizar tu negocio <br />
                        mediante soluciones innovadoras. <br />
                    </h1>
                </div>

                <div className="bento-container">
                    <div className="bento-grid">
                        <div className="bento-item item1">
                            <img style={{ width: '465px' }} src="./Psicologo-Cristian-Retamales.png" alt="" />
                        </div>
                        <div className="bento-item item2">
                            <img style={{ width: '235px' }} src="./ELECPA-ENERGÍA-SPA.png" alt="" />
                        </div>
                        <div className="bento-item item3">
                            <img style={{ width: '235px' }} src="./DR-Consultoría-de-marketing-digital.png" alt="" />
                        </div>
                        {/* <div className="bento-item item2">Wordpress</div>
                        <div className="bento-item item3">NextJS</div>
                        <div className="bento-item item4">Automatización</div> */}
                    </div>
                </div>


                <p className="text-4xl line-clamp-6">Wordpress Autoadministrable - NextJS</p>
                <br />
            </div>
            <div className="flex items-center justify-center">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/CD0YQCmFMOc?si=ZJ4xW4R8ArQo3CY-"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    className="shadow-lg rounded-lg"
                ></iframe>
            </div>
            <br />
            <div style={{ textAlign: 'center' }}>
                <h1 className="text-4xl font-black">Nuestros clientes son la mejor <br />
                    <span style={{ color: '#3b82f6' }}>prueba de nuestro éxito.</span>
                </h1>
            </div>
            <br />
            <div className="-mx-3 flex items-center justify-center">
                <div className="px-3 md:w-1/3">
                    <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div className="w-full flex mb-4 items-center">
                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="./logo1.png" alt="" />
                            </div>
                            <div className="flex-grow pl-3">
                                <h6 className="font-bold text-sm uppercase text-gray-600">
                                    Psicologo Cristian Retamales
                                </h6>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-sm leading-tight">
                                <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                                    "
                                </span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt
                                ratione dolor exercitationem minima quas itaque saepe quasi architecto
                                vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta
                                deleniti.
                                <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                                    "
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div className="w-full flex mb-4 items-center">
                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="./logo2.png" alt="" />
                            </div>
                            <div className="flex-grow pl-3">
                                <h6 className="font-bold text-sm uppercase text-gray-600">
                                    Elecpa Energía
                                </h6>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-sm leading-tight">
                                <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                                    "
                                </span>
                                Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod
                                necessitatibus, labore sapiente, est, dignissimos ullam error ipsam
                                sint quam tempora vel.
                                <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                                    "
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="px-3 md:w-1/3">
                    <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div className="w-full flex mb-4 items-center">
                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="./highlifechile.png" alt="" />
                            </div>
                            <div className="flex-grow pl-3">
                                <h6 className="font-bold text-sm uppercase text-gray-600">
                                    highlifechile
                                </h6>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-sm leading-tight">
                                <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                                    "
                                </span>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
                                obcaecati ullam excepturi dicta error deleniti sequi.
                                <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                                    "
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div className="w-full flex mb-4 items-center">
                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="./pyme.png" alt="" />
                            </div>
                            <div className="flex-grow pl-3">
                                <h6 className="font-bold text-sm uppercase text-gray-600">
                                    GestionaTupyme
                                </h6>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-sm leading-tight">
                                <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                                    "
                                </span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
                                inventore voluptatum nostrum atque, corrupti, vitae esse id accusamus
                                dignissimos neque reprehenderit natus, hic sequi itaque dicta nisi
                                voluptatem! Culpa, iusto.
                                <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                                    "
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className="bento-container">
                <div className="bento-grid">
                    <div className="bento-item item1">Desarrollando Soluciones</div>
                    <div className="bento-item item2">Diseño Adaptativo</div>
                    <div className="bento-item item3">Tienda Online</div>
                </div>
            </div> */}

            <div style={{ textAlign: 'center' }}>
                <h1 className="text-4xl line-clamp-3 font-black">Wordpress Autoadministrable - NextJS</h1>
                {/* <br />
                <h1>
                    <del className="text-4xl "> 110$</del><br />
                    <span className="text-6xl" style={{ color: '#3b82f6' }}>65$</span> <br />
                </h1> */}
            </div>
            <br />
            <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center text-lg font-medium text-gray-800">
                    <FaCheckCircle className="text-green-500 mr-2" />
                    Hosting + Dominio
                </div>
                {/* <div className="flex items-center text-lg font-medium text-gray-800">
                    <FaCheckCircle className="text-green-500 mr-2" />
                    LandingPage (3 paginas) o Carrito de Compras (20 productos)
                </div> */}
                <div className="flex items-center text-lg font-medium text-gray-800">
                    <FaCheckCircle className="text-green-500 mr-2" />
                    LandingPage (3 paginas) o Carrito de Compras (20 productos) + Pagos Online
                </div>
                <div className="flex items-center text-lg font-medium text-gray-800">
                    <FaCheckCircle className="text-green-500 mr-2" />
                    Actualizaciones de plugins, Cambiar imagenes, textos y colores
                </div>
                <div className="flex items-center text-lg font-medium text-gray-800">
                    <FaCheckCircle className="text-green-500 mr-2" />
                    Botón WhatsApp
                </div>
                <div className="flex items-center text-lg font-medium text-gray-800 text-center">
                    <FaCheckCircle className="text-green-500 mr-2" />
                    Gestión del Sitio Web: esto incluye cambios mensuales en su Página Web <br />
                </div>

            </div>
            <br />

            <div style={{ textAlign: 'center' }}>
                <button className="button button--rounded">Cotiza Aquí</button>
            </div>
            <br />
        </>
    )
}