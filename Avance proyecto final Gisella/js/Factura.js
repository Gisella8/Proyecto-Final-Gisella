function mostrar()
{
    let item1=document.getElementById(`prod1`);
    let item2=document.getElementById(`prod2`);
    let item3=document.getElementById(`prod3`);
    let adic=0;
    //1er. item de factura
    if(item1.selectedIndex==0)
    {
        document.getElementById(`desc01`).value="";
        document.getElementById(`vau01`).value=0;
        document.getElementById(`cant01`).value=0;
        document.getElementById(`vat01`).value=0;
        /*--*/

    }
    if(item1.selectedIndex==1)
    {
        document.getElementById(`desc01`).value="Postre de Maracuyá con base de galleta";/*--*/
        document.getElementById(`vau01`).value=item1.options[item1.selectedIndex].value;
        document.getElementById(`vat01`).value=(parseFloat(document.getElementById(`cant01`).value)*parseFloat(document.getElementById(`vau01`).value)|| 0).toFixed(0);
    }
    if(item1.selectedIndex==2)
    {
        document.getElementById(`desc01`).value="Postre de arequipe con finas hierbas";/*--*/
        document.getElementById(`vau01`).value=item1.options[item1.selectedIndex].value;
        document.getElementById(`vat01`).value=(parseFloat(document.getElementById(`cant01`).value)*parseFloat(document.getElementById(`vau01`).value)|| 0).toFixed(0);
    }
    if(item1.selectedIndex==3)
    {
        document.getElementById(`desc01`).value="Postre de grutos rojos con baño en limón";/*--*/
        document.getElementById(`vau01`).value=item1.options[item1.selectedIndex].value;
        document.getElementById(`vat01`).value=(parseFloat(document.getElementById(`cant01`).value)*parseFloat(document.getElementById(`vau01`).value)|| 0).toFixed(0);
    }
    if(item1.selectedIndex==3)
    {
        document.getElementById(`desc01`).value="Postre de tres leche bajo en azúcsar";/*--*/
        document.getElementById(`vau01`).value=item1.options[item1.selectedIndex].value;
        document.getElementById(`vat01`).value=(parseFloat(document.getElementById(`cant01`).value)*parseFloat(document.getElementById(`vau01`).value)|| 0).toFixed(0);
    }
    //2do. item de factura
    if(item2.selectedIndex==0)
    {
        document.getElementById(`desc02`).value="";
        document.getElementById(`vau02`).value=0;
        document.getElementById(`cant02`).value=0;
        document.getElementById(`vat02`).value=0;
        /*--*/
    }
    if(item2.selectedIndex==1)
    {
        document.getElementById(`desc02`).value="Postre de arequipe con finas hierbas";/*--*/
        document.getElementById(`vau02`).value=item2.options[item2.selectedIndex].value;
        document.getElementById(`vat02`).value=(parseFloat(document.getElementById(`cant02`).value)*parseFloat(document.getElementById(`vau02`).value)|| 0).toFixed(0);
    }
    if(item2.selectedIndex==2)
    {
        document.getElementById(`desc02`).value="Postre de arequipe con finas hierbas";/*--*/
        document.getElementById(`vau02`).value=item2.options[item2.selectedIndex].value;
        document.getElementById(`vat02`).value=(parseFloat(document.getElementById(`cant02`).value)*parseFloat(document.getElementById(`vau02`).value)|| 0).toFixed(0);
    }
    if(item2.selectedIndex==3)
    {
        document.getElementById(`desc02`).value="Postre de grutos rojos con baño en limón";/*--*/
        document.getElementById(`vau02`).value=item2.options[item2.selectedIndex].value;
        document.getElementById(`vat02`).value=(parseFloat(document.getElementById(`cant02`).value)*parseFloat(document.getElementById(`vau02`).value)|| 0).toFixed(0);
    }
    if(item2.selectedIndex==3)
    {
        document.getElementById(`desc02`).value="Postre de tres leche bajo en azúcsar";/*--*/
        document.getElementById(`vau02`).value=item2.options[item2.selectedIndex].value;
        document.getElementById(`vat02`).value=(parseFloat(document.getElementById(`cant02`).value)*parseFloat(document.getElementById(`vau02`).value)|| 0).toFixed(0);
    }
    //3er. item de factura
    if(item2.selectedIndex==0)
    {
        document.getElementById(`desc03`).value="";
        document.getElementById(`vau03`).value=0;
        document.getElementById(`cant03`).value=0;
        document.getElementById(`vat03`).value=0;
        /*--*/
    }
    if(item3.selectedIndex==1)
    {
        document.getElementById(`desc03`).value="Postre de arequipe con finas hierbas";/*--*/
        document.getElementById(`vau03`).value=item2.options[item2.selectedIndex].value;
        document.getElementById(`vat03`).value=(parseFloat(document.getElementById(`cant03`).value)*parseFloat(document.getElementById(`vau03`).value)|| 0).toFixed(0);
    }
    if(item3.selectedIndex==2)
    {
        document.getElementById(`desc03`).value="Postre de arequipe con finas hierbas";/*--*/
        document.getElementById(`vau03`).value=item2.options[item2.selectedIndex].value;
        document.getElementById(`vat03`).value=(parseFloat(document.getElementById(`cant03`).value)*parseFloat(document.getElementById(`vau03`).value)|| 0).toFixed(0);
    }
    if(item3.selectedIndex==3)
    {
        document.getElementById(`desc03`).value="Postre de grutos rojos con baño en limón";/*--*/
        document.getElementById(`vau03`).value=item2.options[item2.selectedIndex].value;
        document.getElementById(`vat03`).value=(parseFloat(document.getElementById(`cant03`).value)*parseFloat(document.getElementById(`vau03`).value)|| 0).toFixed(0);
    }
    if(item3.selectedIndex==3)
    {
        document.getElementById(`desc03`).value="Postre de tres leche bajo en azúcsar";/*--*/
        document.getElementById(`vau03`).value=item2.options[item2.selectedIndex].value;
        document.getElementById(`vat03`).value=(parseFloat(document.getElementById(`cant03`).value)*parseFloat(document.getElementById(`vau03`).value)|| 0).toFixed(0);
    }
    //Calcular Adicionales**************//
    let totaladic0=0;
    if(document.getElementById(`checkbox1`).checked)
    {
        totaladic0 += 3000;  //Sumar el valor de oblea
    }
    if(document.getElementById(`checkbox2`).checked)
    {
        totaladic0 += 2500;  //Sumar el valor de helado
    }
    if(document.getElementById(`checkbox3`).checked)
    {
        totaladic0 += 2300;  //Sumar el valor de agua
    }
    //Asignar el valor total al campo correspondiente
    document.getElementById(`adic0`).value = totaladic0;

    //Calcular valor subtotal****//
    document.getElementById(`subt`).value=(parseFloat(document.getElementById(`vat01`).value)+parseFloat(document.getElementById(`vat02`).value)+parseFloat(document.getElementById(`vat03`).value)+parseFloat(document.getElementById(`adic0`).value)|| 0).toFixed(0);
    //Calcular Iva**************//
    document.getElementById(`iva`).value=(parseFloat(document.getElementById(`subt`).value)*0.19|| 0).toFixed(0);


    // Calcular Descuento **********
if (document.getElementById('radio1').checked) {
    document.getElementById('desc').value = 
        (parseFloat(document.getElementById('subt').value) * 0.10 || 0).toFixed(0);
} else if (document.getElementById('radio2').checked) {
    document.getElementById('desc').value = 
        (parseFloat(document.getElementById('subt').value) * 0.00 || 0).toFixed(0);
} else if (document.getElementById('radio3').checked) {
    document.getElementById('desc').value = 
        (parseFloat(document.getElementById('subt').value) * 0.00 || 0).toFixed(0);
}

// Calcular Neto **********
document.getElementById('neto').value = 
    (parseFloat(document.getElementById('subt').value) + parseFloat(document.getElementById('iva').value) - parseFloat(document.getElementById('desc').value) || 0).toFixed(0);

}
function enviar() {
    swal("ESTIMADO CLIENTE", "SU PEDIDO ESTA EN PROCESO .. ESPERE AL LLAMADO DE SU TURNO...", "success");
}