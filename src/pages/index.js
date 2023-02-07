import { graphql } from 'gatsby'
import * as React from 'react'
import LayoutPage from './components/layout'
import { postCard,  } from './components/layout.module.css'

const IndexPage = ({ data }) => {
  return(

    <>
      <LayoutPage>

          {data.allStrapiPost.nodes.map(node => (
            <div className={postCard} key={node.name}>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD9T49aCmVvD8UhGtzpNzlLyKmG5vWlsYcvw&usqp=CAU" alt="pic" width="40px" />
                    <p><b><u>{node.author}</u></b></p>
                </div>
                <div>
                    <br />
                    <img src={node.media[0].formats.large.url}  alt="pic" width="60%" />
                    <h3>{node.title}</h3>
                    <br />
                    <p>
                      {node.content.data.content}
                    </p>
                    <p><small><b><i>{node.publishedAt}</i></b></small></p>
                    <br />
                </div>
                <div>
                    <hr />
                    <br />
                    See More
                </div>

            </div>
          ))}

            

      </LayoutPage>
    </>

  ) 
}

export const query = graphql`
query{

  allStrapiPost {
    nodes {
      id
      title
      media {
        name
        formats {
          large {
            url
          }
        }
      }
      content {
        data {
          content
        }
      }
      publishedAt(formatString: "DD MMM YY")
      author
    }
  }

}
`

export default IndexPage