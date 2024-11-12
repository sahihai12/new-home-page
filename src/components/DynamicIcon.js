import React, { lazy, Suspense } from 'react';

const DynamicIcon = ({ name, ...props }) => {
  // Dynamically import the icon from react-icons
  const IconComponent = lazy(() =>
    import(`react-icons/fi`).then(module => ({ default: module[name] }))
  );

  // Handle if icon name is not valid or does not exist
  if (!name) {
    console.warn("No icon name provided");
    return null;
  }

  return (
    <Suspense fallback={<span>Loading...</span>}>
      <IconComponent {...props} size={16} />
    </Suspense>
  );
};

export default DynamicIcon;
