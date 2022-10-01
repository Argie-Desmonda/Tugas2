function a () {
    console.log('didalam fungsi a')

    function b () {
        console.log('didalam fungsi b')

        function c () {
        console.log('didalam fungsi c')
        }

        c();
    }

    b();
}

a();


