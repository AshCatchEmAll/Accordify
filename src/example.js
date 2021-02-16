import React from 'react'
import { Accordion ,Icon} from 'semantic-ui-react'




let jsonData = [
  {
    key: "Level1",
    title: "Level1",
    content: [
      {
        key: "Menu",
        title: "Menu",
        content: [
          {
            key: "Sharing",
            title: "Sharing",
            content: [
              {
                key: "Home",
                title: "Home",
                content: [],
              },

              {
                key: "Profile",
                title: "Profile",
                content: [
                  {
                    key: "Account",
                    title: "Account",
                    content: [],
                  },
                  {
                    key: "Followers",
                    title: "Followers",
                    content: [],
                  },
                ],
              },
              {
                key: "Request",
                title: "Request",
                content: [
                  {
                    key: "Exhange",
                    title: "Exchange",
                    content: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        key: "Settings",
        title: "Settings",
        content: [
          {
            key: "Profile Setting",
            title: "Profile Setting",
            content: [],
          },
        ],
      },
    ],
  },
  {
    key: "Level2",
    title: "Level2",
    content: [
      {
        key: "Level2A",
        title: "Level2A",
        content: [
          {
            key: "Level2A-Child",
            title: "Level2A-Child",
            content: [],
          },
        ],
      },
    ],
  },
];

//Main algorithm
function accordify(jsonData) {
    if (jsonData.length === 0) {
      return;
    } else {
      for (let i = 0; i < jsonData.length; i++) {
        accordify(jsonData[i]["content"]);
  
        if (jsonData[i]["content"].length !== 0) {
          jsonData[i]["content"] = {
            content: (
              <div>
                <Accordion.Accordion panels={jsonData[i]["content"]} />
              </div>
            ),
          };
        } else {
          jsonData[i]["content"] = {
            content: (
              <div>
                <Accordion.Title
                  icon={Icon.Group}
                  content="I'd find it here"
                  as={"button"}
                  onClick={(event) => {
                    console.log(event.target.textContent);
                  }}
                />
              </div>
            ),
          };
        }
      }
    }
  }
  
  //Call the function
  accordify(jsonData);
  
  //Feed the transformed jsonData to panels prop and export
  const AccordionExampleNested = () => (
    <Accordion defaultActiveIndex={0} panels={jsonData} styled />
  );
  
  export default AccordionExampleNested;