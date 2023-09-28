'use client'

export default function Projects(){
    return(
    <section id="projects" className="text-center text-white">
        <div className="w-11/12 m-auto max-w-screen-lg">
            <h2 className="text-4xl mb-10"> Projects </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3">
                <div className="h-64">
                    <h3>Podzoo</h3>
                </div>
                <div>
                    <h3>Paw Match</h3>
                </div>
                <div>
                    <h3>Retreat</h3>
                </div>
            </div>
        </div>
    </section>
    );
}