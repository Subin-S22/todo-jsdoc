"use client";
/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * */
export default function Layout({ children }) {
  console.log('added a comment in the test branch')
  return <div className="p-10">{children}</div>;
}
