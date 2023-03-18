const getPagination = (count, limit, page) => {
  const totalPages = Math.ceil(count / limit)
  const pages = []
  for (let i = 1; i < totalPages + 1; i++) {
    pages.push(i)
  }
  const currentPage = page < 1 ? 1 : page > totalPages ? totalPages : page
  const prev = currentPage - 1 < 1 ? 1 : currentPage - 1
  const next = currentPage + 1 > totalPages ? totalPages : currentPage + 1
  return {
    pages,
    totalPages,
    currentPage,
    prev,
    next
  }
}

module.exports = {
  getPagination
}
