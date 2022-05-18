import React from 'react';

function getImagePath(data) {
  return `images/flags/${data.name.replace(/\s/, '')}.svg`;
}

export default function AnnotationTemplate(annotation) {
  const { data } = annotation;
  return (
    <svg className="annotation">
      <image href={getImagePath(data)} width="60" height="40" />
    </svg>
  );
}
