function useThousand(figures){
  return figures.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export default useThousand