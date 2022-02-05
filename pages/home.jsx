import styles from '../styles/homepage.module.css';
export default function homepage() {
    return (
        <>
            <div class="p-2">
                <div className={styles.ContainerAsisten} class=" p-2 container-fluid rounded" >
                    <div  className={styles.ContainerAsistenLeft} class="container-sm" >
                        <h1 class="text-sm-start">Our Assistant</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis dolorum laudantium, facere
                            excepturi
                            officiis voluptates. Quod culpa optio velit sint voluptatum, illo suscipit dolores, esse possimus
                            eius
                            sit,
                            doloremque vel?</p>
                        <h6></h6>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non placeat asperiores nesciunt laboriosam
                            amet,
                            necessitatibus eveniet consequuntur voluptate, nulla nam nobis nihil magnam pariatur quisquam,
                            accusantium
                            tempora animi aperiam modi?</p>
                        <div className={styles.ContainerButtonPreviewAsisten}>
                            <button type="button" className={styles.BtnPreviewAsistenSelected}
                                class=" btn-sm btn-dark mx-2 button-preview-asisten" >Research and
                                Development</button>
                            <button type="button"  className={styles.BtnPreviewAsisten} class="btn-sm rounded-5 btn-outline-dark my-1" >Finance and
                                Administration</button>
                            <h6></h6>
                            <button type="button"  className={styles.BtnPreviewAsisten} class="btn-sm rounded-5 btn-outline-dark my-1" >Human
                                Capital
                                Management</button>
                            <button type="button" className={styles.BtnPreviewAsisten} class="btn-sm rounded-5 btn-outline-dark my-1" >Human
                                Resource
                                Management</button>
                            <h6></h6>
                            <button type="button" className={styles.BtnPreviewAsisten} 
                                class="btn-sm rounded-5 btn-outline-dark my-1" >Event</button>
                            <button type="button" className={styles.BtnPreviewAsisten}
                                class=" btn-sm rounded-5 btn-outline-dark my-1" >Operational</button>
                            <button type="button" className={styles.BtnPreviewAsisten} class="btn-sm rounded-5 btn-outline-dark my-1" > External
                                Relationship </button>
                        </div>
                    </div>

                    <div className={styles.ContainerAsistenRight} class="container-md " >
                        <h1 className={styles.PreviewHeadAsisten}>Research and Development</h1>
                        <div className={styles.ContainerAnggota}>
                            <span class="p-3">
                                <img className={styles.ImageHomeAsisten} src="./img/1.png" alt="" />

                                <button type="button" class="btn-list-asisten btn btn-light">Supriadi</button>
                            </span>
                            <span class="p-3">
                                <img className={styles.ImageHomeAsisten} src="./img/2.png" alt="" />
                                <button type="button" class="btn btn-light">Alul</button>
                            </span>
                            <span class="p-3">
                                <img className={styles.ImageHomeAsisten} src="./img/3.png" alt="" />

                                <button type="button" class="btn btn-light">Kaiba</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
