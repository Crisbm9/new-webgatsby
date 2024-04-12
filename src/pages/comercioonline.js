import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ComercioOnline = () => (
  <Layout>
    <h1>Creamos tu página web</h1>
    <p>Realizamos una página web totalmente personalizada para tu comercio consiguiendo así que aunmenten tus ventas</p>
    <Link to="/">Volver a inicio</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default ComercioOnline
