const certification = (Name, Label, Date) => {
  return (
    <h2>
      <bold>{Name}</bold>,{' '}
      <i class="fa fa-italic" aria-hidden="true">
        {Label}
      </i>{' '}
      <i class="fa fa-align-right" aria-hidden="true">
        {Date}
      </i>
    </h2>
  )
}
export default certification
