import React from 'react'
import './css/DetailsDescription.css'

const DetailsDescription = () => {
    const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus ante at tristique ultrices. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis tortor est, vehicula vitae vestibulum vitae, fringilla sit amet orci. Mauris nec sapien vitae erat scelerisque laoreet. Nam quis facilisis diam, et consectetur eros. Sed in nisl pellentesque, sagittis purus et, tincidunt felis. Maecenas imperdiet enim nec velit porta facilisis.
    Pellentesque eget dignissim risus, id vulputate magna. Donec vel arcu id nunc varius pretium vel non sapien. Vestibulum finibus mi quis sapien bibendum, volutpat rhoncus nulla elementum. Fusce eu vulputate ante. Nulla rhoncus dui turpis, at egestas sem tempor vitae. Vestibulum commodo fringilla tellus ut posuere. Duis pharetra accumsan lorem. Nam varius gravida nibh, vitae ornare enim feugiat sed. Praesent nec justo eget elit convallis porta mattis aliquet enim. Nullam convallis laoreet interdum. Quisque porttitor dictum risus vel rhoncus. Pellentesque tristique libero aliquet felis posuere consectetur. Nulla auctor, magna sed cursus imperdiet, orci nulla feugiat sapien, vitae fermentum sem nulla sed libero. Duis placerat vulputate nunc vestibulum pharetra.
    Quisque dapibus dictum velit a ornare. Morbi dignissim sed lacus vel vulputate. Duis vel eros vel odio vehicula finibus ac commodo metus. Maecenas sit amet orci nec magna maximus gravida. Praesent euismod, dui vel sollicitudin consequat, turpis risus ornare tortor, sed vehicula ipsum quam eu risus. Donec in nunc felis. Ut fermentum ornare efficitur. Nullam porttitor nibh cursus magna maximus feugiat. Mauris ut tincidunt erat, ac euismod mi. Sed varius est leo, nec blandit tellus consectetur sed. Mauris sed eleifend ipsum, nec volutpat nisl. Vivamus neque ipsum, sollicitudin vulputate ante eget, aliquam ultricies leo. Morbi rhoncus, sapien at rhoncus placerat, lectus nisl finibus quam, tempor consequat lectus eros ut magna. Aliquam eu turpis pharetra, rhoncus mauris et, laoreet ante. Vivamus mattis interdum sodales. Cras mattis ut nisl vel ultrices.
    Vivamus suscipit tortor eget lorem luctus, in euismod tortor iaculis. Etiam pellentesque malesuada gravida. Nullam consequat ipsum et orci pretium bibendum. Maecenas vitae nulla lacinia, lacinia tortor eu, congue mauris. Donec vehicula velit at tristique rhoncus. Integer at ex massa. Aliquam laoreet arcu nibh, nec aliquam est rhoncus maximus. Donec nec vestibulum risus.
    Phasellus vitae pharetra urna, a congue ipsum. Quisque quis elit eu nisi vulputate dapibus. Aenean aliquam pellentesque ex, non venenatis mauris efficitur non. Phasellus et sodales lorem. Sed pretium nibh ac eleifend ullamcorper. Aliquam erat volutpat. In aliquam aliquam porttitor. Pellentesque tincidunt convallis erat et pellentesque. Vivamus eu hendrerit nisl, a malesuada justo. Aliquam at lacinia ipsum. Sed euismod mauris mauris, sit amet placerat lacus sollicitudin ac. Praesent et malesuada augue. Cras efficitur dolor at scelerisque pellentesque.`

    return (
    <div className='detailsDescription'>
        <p>
            { description }
        </p>
        <button className='readMoreText'>Read more...</button>
    </div>
  )
}

export default DetailsDescription