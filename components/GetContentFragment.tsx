import React from 'react';
// Format raw text from Hygraph query
const getContentFragment = (index, text, obj, type?) => {
  let modifiedText = text;
  if (obj) {
    if (obj.bold) {
      modifiedText = <b key={index}> {text} </b>;
    }
    if (obj.italic) {
      modifiedText = <em key={index}> {text} </em>;
    }
    if (obj.underline) {
      modifiedText = <u key={index}> {text} </u>;
    }
  }

  switch (type) {
    case 'heading-three':
      return (
        <h3 key={index}>
          {modifiedText.map((item, i) => (
            <React.Fragment key={i}> {item} </React.Fragment>
          ))}
        </h3>
      );
    case 'paragraph':
      return (
        <p key={index}>
          {modifiedText.map((item, i) => (
            <React.Fragment key={i}> {item} </React.Fragment>
          ))}
        </p>
      );
    case 'heading-four':
      return (
        <h4 key={index}>
          {modifiedText.map((item, i) => (
            <React.Fragment key={i}> {item} </React.Fragment>
          ))}
        </h4>
      );
    case 'image':
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={index} alt={obj.title} height={obj.height} width={obj.width} src={obj.src} />
      );

    default:
      return modifiedText;
  }
};

export default getContentFragment;
