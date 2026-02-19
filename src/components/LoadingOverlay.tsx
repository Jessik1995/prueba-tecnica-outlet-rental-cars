export const LoadingOverlay = () => {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
        <img
          src="/loader.svg"
          alt="Loading"
          className="w-16 h-16"
        />
      </div>
    )
  }
  