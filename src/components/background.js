const Background = ({children}) => {
    return (
      // Remove transition-all to disable the background color transition.
      <body className="bg-white dark:bg-gray-900 transition-all">
        <div className="px-4 mx-auto max-w-screen-sm md:max-w-screen-md md:p-0 lg:max-w-screen-lg xl:max-w-screen-xl">
          <div className="min-h-screen flex">
            {children}
          </div>
        </div>
      </body>
    )
}

export default Background;