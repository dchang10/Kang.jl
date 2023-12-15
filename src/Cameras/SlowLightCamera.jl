export SlowLightCamera

"""
    $TYPEDEF

Basic Pixel Type.
"""
struct SlowLightPixel{T} <: AbstractPixel
    metric::Kerr{T}
    "Pixel screen_coordinate"
    screen_coordinate::NTuple{2, T}
    "Radial roots"
    roots::NTuple{4,Complex{T}}
    "Radial antiderivative"
    I0_inf::T
    "Radial phi antiderivative"
    Iϕ_inf::T
    "Radial time antiderivative"
    It_inf::T
    I1_inf_m_I0_terms::T
    I2_inf_m_I0_terms::T
    Ip_inf_m_I0_terms::T
    Im_inf_m_I0_terms::T
    "Angular antiderivative"
    absGθo_Gθhat::NTuple{2,T}
    "Angular ϕ antiderivative"
    absGϕo_Gϕhat::NTuple{2,T}
    "Angular t antiderivative"
    absGto_Gthat::NTuple{2,T}
    "Half orbit of angular t antiderivative"
    θo::T
    η::T
    λ::T
    function SlowLightPixel(met::Kerr{T}, α::T, β::T, θo) where {T}
        tempη = Krang.η(met, α, β, θo)
        tempλ = Krang.λ(met, α, θo)
        roots = Krang.get_radial_roots(met, tempη, tempλ)
        numreals = sum(_isreal2.(roots))
        if (numreals == 2) && (abs(imag(roots[4])) < sqrt(eps(T)))
            roots = (roots[1], roots[4], roots[2], roots[3])
        end
        I1, I2, Ip, Im = radial_inf_integrals(met, roots)
        new{T}(
            met,
            (α, β), 
            roots, 
            Krang.Ir_inf(met, roots), 
            Krang.Iϕ_inf(met, roots, tempλ), 
            Krang.It_inf(met, roots, tempλ), 
            I1, I2, Ip, Im, 
            Krang._absGθo_Gθhat(met, θo, tempη, tempλ), 
            Krang._absGϕo_Gϕhat(met, θo, tempη, tempλ), 
            Krang._absGto_Gthat(met, θo, tempη, tempλ),
            θo, tempη, tempλ
        )
    end
end

"""
    $TYPEDEF

Screen made of Basic Pixels.
"""
struct SlowLightScreen{T} <: AbstractScreen
    "Minimum and Maximum Bardeen α values"
    αrange::NTuple{2, T}

    "Minimum and Maximum Bardeen β values"
    βrange::NTuple{2, T}

    "Data type that stores screen pixel information"
    pixels::Matrix{SlowLightPixel{T}}
    function SlowLightScreen(met::Kerr{T}, αmin, αmax, βmin, βmax, θo, res) where {T}
        screen = Matrix{SlowLightPixel}(undef, res, res)
        αvals = range(αmin, αmax, length=res)
        βvals = range(βmin, βmax, length=res)
        
        Threads.@threads for (iα, α) in collect(enumerate(αvals))
            for (iβ, β) in enumerate(βvals)
                screen[iα, iβ] = SlowLightPixel(met, α, β, θo)
            end
        end
        new{T}((αmin, αmax), (βmin, βmax), screen)
    end
end

"""
    $TYPEDEF

Observer sitting at radial infinity.
The frame of this observer is alligned with the Boyer-Lindquist frame.
"""
struct SlowLightCamera{T} <: AbstractCamera
    metric::Kerr{T}
    "Data type that stores screen pixel information"
    screen::SlowLightScreen{T}
    "Observer screen_coordinate"
    screen_coordinate::NTuple{2, T}
    function SlowLightCamera(met::Kerr{T}, θo, αmin, αmax, βmin, βmax, res) where {T}
        new{T}(met, SlowLightScreen(met, αmin, αmax, βmin, βmax, θo, res), (T(Inf), θo))
    end
end



function η(pix::SlowLightPixel) return pix.η end
function λ(pix::SlowLightPixel) return pix.λ end
function roots(pix::SlowLightPixel) return pix.roots end
function screen_coordinate(pix::SlowLightPixel) return pix.screen_coordinate end
function inclination(pix::SlowLightPixel) return pix.θo end
function I0_inf(pix::SlowLightPixel) return pix.I0_inf end
function Ir_inf(pix::SlowLightPixel) return pix.I0_inf end
function I1_inf_m_I0_terms(pix::SlowLightPixel) return pix.I1_inf_m_I0_terms end
function I2_inf_m_I0_terms(pix::SlowLightPixel) return pix.I2_inf_m_I0_terms end
function Ip_inf_m_I0_terms(pix::SlowLightPixel) return pix.Ip_inf_m_I0_terms end
function Im_inf_m_I0_terms(pix::SlowLightPixel) return pix.Im_inf_m_I0_terms end
function radial_inf_integrals_m_I0_terms(pix::SlowLightPixel) return I1_inf_m_I0_terms(pix), I2_inf_m_I0_terms(pix), Ip_inf_m_I0_terms(pix), Im_inf_m_I0_terms(pix) end
function Iϕ_inf(pix::SlowLightPixel) return pix.Iϕ_inf end
function It_inf(pix::SlowLightPixel) return pix.It_inf end
function absGθo_Gθhat(pix::SlowLightPixel) return pix.absGθo_Gθhat end
function absGϕo_Gϕhat(pix::SlowLightPixel) return pix.absGϕo_Gϕhat end
function absGto_Gthat(pix::SlowLightPixel) return pix.absGto_Gthat end